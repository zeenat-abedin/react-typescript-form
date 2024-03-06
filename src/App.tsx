import { ChakraProvider, Box } from '@chakra-ui/react'

import HookForm from './components/HookForm'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxW="960px" mx="auto" >
        <Box textStyle='h1'>User Details</Box>
        <HookForm />
      </Box>
    </ChakraProvider>
  )
}

export default App;
