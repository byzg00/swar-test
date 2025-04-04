import React, { useEffect, useState } from 'react'

import { useAsyncFn } from '@/hooks/useAsyncFn'
import { fetchCategories, fetchInstance } from '@/services/fetchData'
import Spinner from '@/components/Spinner'
import { Categories } from '@/components/categories'
import { Switcher } from '@/components/switcher'

import { SpinnerWrapper, Wrapper } from './styled'

const Index = () => {
  const [
    { isReady: categoriesIsReady, data: categories },
    handleFetchCategories,
  ] = useAsyncFn(fetchCategories)
  const [{ isReady: instanceIsReady, data: instance }, handleFetchInstance] =
    useAsyncFn(fetchInstance)
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    if (!categoriesIsReady || !instanceIsReady) {
      handleFetchCategories()
      handleFetchInstance().then(() => setCurrentLang(instance.default_locale))
    }
  }, [
    categoriesIsReady,
    handleFetchCategories,
    handleFetchInstance,
    instance?.default_locale,
    instanceIsReady,
  ])

  if (!categoriesIsReady || !instanceIsReady) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  }

  return (
    <Wrapper>
      <Switcher
        defaultValue={instance.default_locale}
        onChange={setCurrentLang}
        values={instance.locales}
      />
      <Categories data={categories} lang={currentLang} />
    </Wrapper>
  )
}
Index.displayName = 'Index'

export default Index
