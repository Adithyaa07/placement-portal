import { useRegister } from "hooks/auth";
import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  FormErrorMessage,
  Text,
  Icon,
  Center,
} from "@chakra-ui/react";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "./form-validate";
import { RiUserFill, RiMailLine, RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { HOME } from "Route/routes";

const Register = () => {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Box
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to right, purple.400, pink.500)"
    >
      <Link
        as={RouterLink}
        to={HOME}
        fontWeight="medium"
        textDecor="underline"
        _hover={{ background: "teal.100" }}
      >
        <Icon as={FaAngleLeft} />
        Back to Home
      </Link>
      <Box
        p="8"
        mt="150"
        mx="auto"
        maxWidth="450px"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        <form onSubmit={handleSubmit(handleRegister)}>
          <Text
            fontSize="px"
            fontWeight="bold"
            lineHeight="110%"
            mb="4"
            size="lg"
            letterSpacing="-1%"
          >
            <Center>Student's Registration</Center>
          </Text>
          <FormControl isInvalid={errors.username} mb="4">
            <FormLabel>Username</FormLabel>
            <Flex>
              <Input
                placeholder="username"
                {...register("username", usernameValidate)}
              />
              <Box ml="2" padding="2">
                <RiUserFill size="20px" color="gray.500" />
              </Box>
            </Flex>
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Flex>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", emailValidate)}
              />
              <Box ml="2" padding="2">
                <RiMailLine size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Flex>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password", passwordValidate)}
              />
              <Box ml="2" padding="2">
                <RiLockPasswordFill size="20px" color="gray.500" />
              </Box>
            </Flex>
          </FormControl>

          <Button
            type="submit"
            colorScheme="purple"
            width="full"
            isLoading={isLoading}
            loadingText="Signing Up"
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
