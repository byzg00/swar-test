import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

// MARK: - Types

export type UseAsyncFnState<Result, Error> = {
  /** Holds the result of the promise returned by the `asyncFn` if it has resolved successfully */
  data: Result | undefined

  /** Holds whether the promise returned by the `asyncFn` has been fulfilled */
  isLoading: boolean

  /**
   * An error with which the promise returned by the `asyncFn` has been rejected.
   * Can be used to show an "error" message
   */
  error?: Error

  isReady: boolean

  /**
   * True if the promise returned by the `asyncFn` has resolved successfully and there's no pending async call.
   * Can be used to show a "success" message
   */
  isSuccess: boolean
}

export type UseAsyncFnStateReducer<Result, Error> = (
  oldState: UseAsyncFnState<Result, Error>,
) => UseAsyncFnState<Result, Error>
export type UseAsyncFnSetState<Result, Error> = (
  getState: UseAsyncFnStateReducer<Result, Error>,
) => void

// MARK: - Hook

/**
 * Handles the logic of calling an arbitrary async function using an external state.
 * Returned function has a stable reference.
 */
export const useAsyncFnExternal = <Result, Error, Args extends Array<unknown>>(
  /** A callback for updating the external state */
  setStateFn: UseAsyncFnSetState<Result, Error>,

  /** An arbitrary function returning a promise */
  asyncFn: (...args: Args) => Promise<Result>,
) => {
  // We use this lock to allow only sequential requests
  const concurrentLockRef = useRef(false)
  const isMountedRef = useRef(false)

  const asyncFnRef = useRef(asyncFn)
  const setStateFnRef = useRef(setStateFn)

  useLayoutEffect(() => {
    asyncFnRef.current = asyncFn
    setStateFnRef.current = setStateFn
  })

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const callAsyncFn = useCallback(
    async (...args: Parameters<typeof asyncFn>) => {
      if (concurrentLockRef.current) {
        return undefined
      }

      concurrentLockRef.current = true

      const setState = setStateFnRef.current

      setState((oldState) => ({
        ...oldState,
        isLoading: true,
        isSuccess: false,
        error: undefined,
      }))

      return asyncFnRef
        .current(...args)
        .then((data) => {
          if (isMountedRef.current) {
            setState(() => ({
              isLoading: false,
              isSuccess: true,
              error: undefined,
              isReady: true,
              data,
            }))
          }

          return data
        })
        .catch((err) => {
          if (isMountedRef.current) {
            setState((state) => ({
              ...state,
              isLoading: false,
              isSuccess: false,
              isReady: true,
              error: err,
            }))
          }
          return Promise.reject(err)
        })
        .finally(() => {
          concurrentLockRef.current = false
        })
    },
    [],
  )

  return callAsyncFn
}

// MARK: - Default State

useAsyncFnExternal.makeInitialState = <Data, Error = unknown>(
  initialState: Partial<UseAsyncFnState<Data, Error>> = {},
): UseAsyncFnState<Data, Error> => ({
  data: undefined,
  isLoading: false,
  isSuccess: false,
  isReady: false,
  ...initialState,
})
