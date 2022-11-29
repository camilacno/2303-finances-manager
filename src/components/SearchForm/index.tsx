import React from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type='text' placeholder='Busque uma transação' />
      <button type='submit'>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
