import styled from 'styled-components'

export const LanguageSwitcher = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

export const RadioButton = styled.label<{ checked?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ checked }) => (checked ? '#2e7d32' : '#ccc')};
  background-color: ${({ checked }) => (checked ? '#e6f4ea' : '#f8f8f8')};
  color: ${({ checked }) => (checked ? '#2e7d32' : '#333')};
  cursor: pointer;
  font-size: 0.9rem;
  user-select: none;
  transition: all 0.2s ease;

  input {
    display: none;
  }

  &:hover {
    background-color: #eaeaea;
  }
`
