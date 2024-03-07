import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Flex,
} from '@chakra-ui/react'

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  dob: string,
  gender: string
}

 function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  function onSubmit(values: FormValues) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h1>Basic Details</h1>
      <Flex direction="row" alignItems="center" justifyContent="space-between" mt={4}>
      <FormControl isInvalid={errors.firstName ? true : undefined} mb="4" >
        <FormLabel htmlFor='firstName'>First name</FormLabel>
        <Input
          id='firstName'
          placeholder='Enter First name'
          {...register('firstName', {
            required: 'First name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          bg='#D9D9D9'
        />
        <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.lastName ? true : undefined} mb="4">
        <FormLabel htmlFor='lastName'>Last name</FormLabel>
        <Input
          id='lastName'
          placeholder='Enter Last name'
          {...register('lastName', {
            required: 'Last name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          bg='#D9D9D9'
        />
        <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
      </FormControl>
      </Flex>

      <h1>Other Information</h1>

    <Flex direction="row" alignItems="center" justifyContent="space-between" mt={4}>
      <FormControl isInvalid={!!errors.gender} mb="4">
      <h2>Gender</h2>
      <Select placeholder='Select Gender' bg='#D9D9D9'>
         <option value='male'>Male</option>
         <option value='female'>Female</option>
         <option value='other'>Other</option>
      </Select>
      </FormControl>
      

      <FormControl id='dob' mb="4" >
        <h2>Date of Birth</h2>
      </FormControl>     
      </Flex>
      
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default HookForm;
