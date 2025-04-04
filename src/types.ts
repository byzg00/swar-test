export type Category = {
  id: number
  name: { en: string; ru: string }
  public: boolean
  image_path: string
}

export type Instance = {
  locales: string[]
  default_locale: 'en' | 'ru'
}

export type Article = {
  id: number
  ext_id: number
  rank: number
  status: string
  highlight: Record<string, unknown>
  public_urls: string
  created_at: string
  updated_at: string
  published_at: string
  author: string
}
