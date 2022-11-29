import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from '../Header/styles'

import logo from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt='' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

// asChild -> uses the application button instead of creating a new button as a trigger
// portal -> render a child element elsewhere in the DOM
