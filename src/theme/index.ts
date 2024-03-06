import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ['24px', '36px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['18px', '24px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})

export default theme