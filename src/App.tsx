import { ChakraProvider, Box } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxW="960px" mx="auto" >
        <Box textStyle='h1' m={4} textAlign="center">User Details</Box>
        <Box textStyle='h2' bg='#F0EEEE' p={6}> 
        <HookForm />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;
