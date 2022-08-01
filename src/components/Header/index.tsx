import { useState } from 'react'
import ReactModal from 'react-modal'
import logoImg from '../../assets/logo.svg'
//import {Box, Flex, Button} from '@chakra-ui/react'
import {Container, Content} from './styles'

type HeaderProps = {
  onclick: () => void
}

export function Header({onclick}: HeaderProps) {
  
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type='button' onClick={onclick}>
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}
