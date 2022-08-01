import { useState } from 'react'
import ReactModal from 'react-modal'
import logoImg from '../../assets/logo.svg'
//import {Box, Flex, Button} from '@chakra-ui/react'
import {Container, Content} from './styles'
export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type='button' onClick={handleOpenNewTransactionsModal}>
        Nova Transação
      </button>

      <ReactModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionsModal}>
        <h2>Cadastrar nova Transaçao</h2>
      </ReactModal>
      </Content>
    </Container>
  )
}
