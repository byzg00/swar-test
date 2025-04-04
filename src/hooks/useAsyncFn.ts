import { useState } from 'react'

import { useAsyncFnExternal } from './useAsyncFnExternal'

export type { UseAsyncFnState } from './useAsyncFnExternal'

/** Handles the logic of calling an arbitrary async function using an internal state */
export const useAsyncFn = <Result, Error, Args extends Array<unknown>>(
  /** An arbitrary function returning a promise */
  asyncFn: (...args: Args) => Promise<Result>,

  /** Initial data before the first async call */
  initialData?: Result,
) => {
  const initialState = useAsyncFnExternal.makeInitialState<Result, Error>({
    data: initialData,
  })
  const [state, setState] = useState(initialState)

  const callAsyncFn = useAsyncFnExternal<Result, Error, Args>(setState, asyncFn)

  return [state, callAsyncFn] as const
}
