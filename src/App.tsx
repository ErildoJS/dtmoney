import { GlobalStyle } from "./styles/global";
import {ChakraProvider} from '@chakra-ui/react'


export function App() {

  return (
    <ChakraProvider>
      <GlobalStyle />
      <h1>ola mundo</h1>
    </ChakraProvider>
  );
}

//svg - melhor padrao para web
//css scoped - 
//diminuindo o css
//16px vezes 0,9375 = 15px
//16px vezes 0,875 = 14px

