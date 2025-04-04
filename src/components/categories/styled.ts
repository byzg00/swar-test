import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  padding: 16px;
`

export const Tile = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

export const TileImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`

export const TileContent = styled.div`
  padding: 12px;
`

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0 0 8px 0;
  color: #333;
`

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 6px;
  background-color: #e6f4ea;
  color: #2e7d32;
`
