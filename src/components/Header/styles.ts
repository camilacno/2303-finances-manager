import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-weight: bold;
  height: 50px;
  padding: 0 1.25rem;

  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
