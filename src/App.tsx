import { GlobalStyle } from "./styles/global";
//import {ChakraProvider} from '@chakra-ui/react'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";


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
    <TransactionsProvider>
      <Header onpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>

      <GlobalStyle />
    </TransactionsProvider>
  );
}

//svg - melhor padrao para web
//css scoped - 
//diminuindo o css
//16px vezes 0,9375 = 15px
//16px vezes 0,875 = 14px
//prop drilin


