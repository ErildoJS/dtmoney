import { useState } from 'react'
import ReactModal from 'react-modal'
import logoImg from '../../assets/logo.svg'
//import {Box, Flex, Button} from '@chakra-ui/react'
import {Container, Content} from './styles'

type HeaderProps = {
  onpenNewTransactionsModal: () => void
}

export function Header({onpenNewTransactionsModal}: HeaderProps) {
  
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type='button' onClick={onpenNewTransactionsModal}>
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}
