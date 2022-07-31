import { GlobalStyle } from "./styles/global";
import {ChakraProvider} from '@chakra-ui/react'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import {createServer} from 'miragejs'

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

  return (
    <ChakraProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ChakraProvider>
  );
}

//svg - melhor padrao para web
//css scoped - 
//diminuindo o css
//16px vezes 0,9375 = 15px
//16px vezes 0,875 = 14px

