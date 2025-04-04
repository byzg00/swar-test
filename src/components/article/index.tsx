import React, { useEffect, useState } from 'react'

import { Article as ArticleType } from '@/types'

import { Card, Title, Meta, StatusBadge, Link } from './styled'

type ArticleCardProps = {
  article: ArticleType
}

const STORAGE_KEY = 'readArticles'

export const Article: React.FC<ArticleCardProps> = ({ article }) => {
  const [isRead, setIsRead] = useState(false)

  useEffect(() => {
    const readIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    setIsRead(readIds.includes(article.id))
  }, [article.id])

  const handleClick = () => {
    const readIds: number[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]',
    )
    if (!readIds.includes(article.id)) {
      const updated = [...readIds, article.id]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setIsRead(true)
    }
    window.open(article.public_urls, '_blank')
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString()

  return (
    <Card $read={isRead} onClick={handleClick}>
      <Title>Статья #{article.id}</Title>
      <Meta>
        Автор: {article.author} | Создана: {formattedDate} | Ранг:{' '}
        {article.rank}
      </Meta>
      <StatusBadge $status={article.status}>{article.status}</StatusBadge>
      <div style={{ marginTop: '12px' }}>
        <Link>Перейти к статье →</Link>
        {isRead && (
          <span style={{ marginLeft: '10px', color: '#28a745' }}>
            ✓ Прочитано
          </span>
        )}
      </div>
    </Card>
  )
}
