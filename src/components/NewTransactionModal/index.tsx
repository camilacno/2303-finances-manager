import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={16} />
        </CloseButton>

        <form action=''>
          <input type='text' placeholder='Descrição' required />
          <input type='number' placeholder='Valor' required />
          <input type='text' placeholder='Categoria' required />

          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
