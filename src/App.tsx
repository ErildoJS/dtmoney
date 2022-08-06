import { GlobalStyle } from "./styles/global";
import {ChakraProvider} from '@chakra-ui/react'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import {createServer, Model} from 'miragejs'
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pagar renda',
          type: 'withdraw',
          category: 'casa',
          amount: 4000,
          createdAt: new Date('2022-08-06 12:00:00'),
        },
        {
          id: 2,
          title: 'Propina da faculdade',
          type: 'withdraw',
          category: 'faculdade',
          amount: 450,
          createdAt: new Date('2022-08-06 12:30:00'),
        },
        {
          id: 3,
          title: 'Criando um website',
          type: 'deposit',
          category: 'tecnologia',
          amount: 1400,
          createdAt: new Date('2022-08-06 11:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    /*this.get('/transactions', () => {
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
    })*/

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

Modal.setAppElement('#root')

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
      <Header onpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>

      <GlobalStyle />
    </ChakraProvider>
  );
}

//svg - melhor padrao para web
//css scoped - 
//diminuindo o css
//16px vezes 0,9375 = 15px
//16px vezes 0,875 = 14px

