import React from 'react'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from '../Header/styles'

import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt='' />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
