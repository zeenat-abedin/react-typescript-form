import { ChakraProvider, Box } from '@chakra-ui/react'

import HookForm from './components/HookForm'

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <HookForm />
      </Box>
    </ChakraProvider>
  )
}

export default App;
