import React from 'react'
import { Link } from 'react-router'

import { backendPath } from '@/services/axios'

import { Category as CategoryType } from '../../types'

import { Grid, Tile, TileContent, TileImage, Badge, Title } from './styled'

type TileGridProps = {
  data: CategoryType[]
  lang?: string
}

export const Categories: React.FC<TileGridProps> = ({ data, lang = 'ru' }) => (
  <Grid>
    {data.map((item) => (
      <Link to={`/articles/${item.id}/${lang}`} key={item.id}>
        <Tile>
          <TileImage
            src={`${backendPath}${item.image_path}`}
            alt={item.name[lang]}
          />
          <TileContent>
            <Title>{item.name[lang]}</Title>
            {item.public && <Badge>Публично</Badge>}
          </TileContent>
        </Tile>
      </Link>
    ))}
  </Grid>
)
