import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select
} from '@chakra-ui/react'

interface FormValues {
  name: string,
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
      <FormControl isInvalid={errors.name ? true : undefined} mb="4" >
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          id='name'
          placeholder='Enter First name'
          {...register('name', {
            required: 'First name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          bg='#D9D9D9'
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.name ? true : undefined} mb="4">
        <FormLabel htmlFor='name'>Last name</FormLabel>
        <Input
          id='name'
          placeholder='Enter Last name'
          {...register('name', {
            required: 'Last name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          bg='#D9D9D9'
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <h1>Other Information</h1>

      <FormControl isInvalid={!!errors.gender} mb="4">
      <h2>Gender</h2>
      <Select placeholder='Select Gender' bg='#D9D9D9'>
         <option value='male'>Male</option>
         <option value='female'>Female</option>
         <option value='other'>Other</option>
      </Select>
      </FormControl>
      

      <FormControl id='age' mb="4" >
      <h2>Date of Birth</h2>
      </FormControl>
      

      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default HookForm;
