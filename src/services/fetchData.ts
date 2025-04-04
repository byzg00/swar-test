import { backendClient } from '@/services/axios'
import { Article, Category, Instance } from '@/types'
import { articlesMock } from '@/services/articlesMock'

export const fetchCategories = () =>
  backendClient
    .get<{ results: Category[] }>('/api/categories/')
    .then((result) => result.data.results)

export const fetchInstance = () =>
  backendClient.get<Instance>('/api/instance/').then((result) => result.data)

export const fetchArticles = ({
  categoryId,
  lang,
}: {
  categoryId: string
  lang: string
}) =>
  new Promise<{ results: Article[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        results: articlesMock,
      })
    }, 1000)
  }).then((result) => result.results)
  // backendClient.get('/api/search/articles/', {
  //     params: {
  //         categoryId,
  //         lang,
  //         search: '',
  //     },
  // })
