import { GlobalStyle } from "./styles/global";
import {ChakraProvider} from '@chakra-ui/react'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";


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

