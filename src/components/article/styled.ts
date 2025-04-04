import styled from 'styled-components'

export const Card = styled.div<{ $read: boolean }>`
  background: ${({ $read }) => ($read ? '#f8f9fa' : '#fff')};
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  max-width: 600px;
  opacity: ${({ $read }) => ($read ? 0.6 : 1)};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;
`

export const Meta = styled.div`
  font-size: 0.875rem;
  color: #777;
  margin-bottom: 12px;
`

export const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #fff;
  background-color: ${({ $status }) => {
    switch ($status) {
      case 'PUBLISHED':
        return '#28a745'
      case 'DRAFT':
        return '#ffc107'
      case 'REVIEW':
        return '#17a2b8'
      case 'ARCHIVED':
        return '#6c757d'
      default:
        return '#999'
    }
  }};
`

export const Link = styled.span`
  color: #007bff;
  text-decoration: underline;
  font-weight: 500;
`
