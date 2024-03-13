import { useForm, useFieldArray } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Flex,
  IconButton,
  InputGroup,
  InputLeftAddon,
  useToast
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import type { FormValues } from "../types";
import CustomSelect from "./CustomSelect";

interface Props {
  handleFormData: (data: FormValues | null) => void;
}

function HookForm({ handleFormData }: Props) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      techStack: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "techStack",
  });

    const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];


  const toast = useToast();

  function onSubmit(values: FormValues) {
    handleFormData(null);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        handleFormData(values);
        toast({
        title: "Form submitted successfully.",
        description: "We have received your form submission.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Basic Details</h1>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
        gap={2}
      >
        <FormControl isInvalid={errors.firstName ? true : undefined} mb="4">
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            id="firstName"
            placeholder="Enter First name"
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
            bg="#D9D9D9"
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName ? true : undefined} mb="4">
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            id="lastName"
            placeholder="Enter Last name"
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "Minimum length should be 2" },
            })}
            bg="#D9D9D9"
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
        gap={2}
      >
        <FormControl isInvalid={errors.email ? true : undefined} mb="4">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email format is incorrect",
              },
            })}
            bg="#D9D9D9"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phone ? true : undefined} mb="4">
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
            <Input
              id="phone"
              placeholder="Enter Phone"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Mobile format is incorrect",
                },
              })}
              bg="#D9D9D9"
            />
          </InputGroup>
        </FormControl>
      </Flex>
      <h1>Other Information</h1>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
        gap={2}
      >
        <FormControl isInvalid={!!errors.gender} mb="4">
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select placeholder="Select Gender" bg="#D9D9D9">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          {/* <CustomSelect options={options} /> */}
        </FormControl>

        <FormControl id="dob" mb="4" isInvalid={!!errors.dob}>
          <FormLabel htmlFor="date-of-birth">Date of Birth</FormLabel>
          <Input
            placeholder="Select Date"
            size="md"
            type="date"
            id="date-of-birth"
            {...register("dob", {
              required: "Date of birth is required",
            })}
            bg="#D9D9D9"
          />
          <FormErrorMessage>
            {errors.dob && errors.dob.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
        gap={2}
      >
        <FormControl id="" mb="4">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <h2>Tech Stack</h2>
            <IconButton
              aria-label="Add tech stack"
              icon={<AddIcon />}
              onClick={() => append({ name: "" })}
              marginTop={4}
              colorScheme="teal"
            />
          </Flex>

          <FormControl isInvalid={errors.techStack ? true : undefined} mb="4">
            <FormLabel htmlFor="techStack">Tech Stack</FormLabel>
            {fields.map((item, index) => (
              <Flex key={item.id} direction={"column"} marginBottom={3}>
                <Flex>
                  <Input
                    {...register(`techStack.${index}.name`, {
                      required: "Tech stack is required",
                    })}
                    bg="#D9D9D9"
                    placeholder="Enter Tech Stack"
                    defaultValue={item.name}
                  />
                  {index > 0 && (
                    <IconButton
                      aria-label="Remove tech stack"
                      icon={<MinusIcon />}
                      onClick={() => remove(index)}
                      colorScheme="red"
                      marginLeft={2}
                    />
                  )}
                </Flex>
                <FormErrorMessage>
                  {errors.techStack?.[index]?.name &&
                    errors.techStack?.[index]?.name?.message}
                </FormErrorMessage>
              </Flex>
            ))}
          </FormControl>
        </FormControl>
        <FormControl />
      </Flex>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default HookForm;
