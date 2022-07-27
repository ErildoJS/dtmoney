import logoImg from '../../assets/logo.svg'
//import {Box, Flex, Button} from '@chakra-ui/react'
import {Container, Content} from './styles'
export function Header() {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type='button'>
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}
