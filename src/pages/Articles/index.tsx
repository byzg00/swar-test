import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useAsyncFn } from '@/hooks/useAsyncFn'
import { fetchArticles } from '@/services/fetchData'
import { SpinnerWrapper, Wrapper } from '@/pages/Index/styled'
import Spinner from '@/components/Spinner'
import { Article } from '@/components/article'

export const Articles = () => {
  const { categoryId, lang } = useParams()
  const [{ isReady: articlesIsReady, data: articles }, handleFetchArticles] =
    useAsyncFn(fetchArticles)

  useEffect(() => {
    handleFetchArticles({ categoryId, lang })
  }, [categoryId, handleFetchArticles, lang])

  if (!articlesIsReady) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  }

  return (
    <Wrapper>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </Wrapper>
  )
}
