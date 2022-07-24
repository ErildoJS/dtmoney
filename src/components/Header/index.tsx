import logoImg from '../../assets/logo.svg'
import {Box, Flex, Button} from '@chakra-ui/react'

export function Header() {
  return (
    <Box bg='#5429cc'>
      <Flex maxW={1120} my={0} mx={'auto'} pt={8} pb={48} pr={4} align="center" justify="space-between">

      <img src={logoImg} alt="dt money" />
      <Button type="button" cursor="pointer" fontSize={16} color='#FFF' bg='#6933ff' border={0} py={0} px={8} borderRadius={6} h={12} _hover={{'bg': '#6c45d9'}} transition='ease-in'>Nova Transaçaõ</Button>
      </Flex>
    </Box>
  )
}