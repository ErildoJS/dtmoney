import { GlobalStyle } from "./styles/global";
import {ChakraProvider} from '@chakra-ui/react'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import {createServer} from 'miragejs'
import ReactModal from "react-modal";
import { useState } from "react";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    })
  }
})
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ChakraProvider>
      <Header onclick={handleOpenNewTransactionsModal} />
      <Dashboard />

      <ReactModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionsModal}>
        <h2>Cadastrar nova Transaçao</h2>
      </ReactModal>

      <GlobalStyle />
    </ChakraProvider>
  );
}

//svg - melhor padrao para web
//css scoped - 
//diminuindo o css
//16px vezes 0,9375 = 15px
//16px vezes 0,875 = 14px

