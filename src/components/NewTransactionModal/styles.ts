import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  inset: 0;
  position: fixed;

  height: 100vh;
  width: 100vw;
`

export const Content = styled(Dialog.Content)`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background: ${(props) => props.theme['gray-900']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${(props) => props.theme['green-500']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      cursor: pointer;
      flex: 1;
      font-weight: bold;
      height: 50px;
      margin-top: 1.5rem;
      padding: 1rem;

      transition: background-color 0.1s;

      &:hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`
