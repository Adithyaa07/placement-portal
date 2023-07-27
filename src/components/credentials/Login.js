import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Center,
  Text,
  Icon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { FORPW, HOME, REGISTER, STUDENT } from "Route/routes";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "./form-validate";

function Login() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: STUDENT,
    });
  }

  return (
    <Box height="100vh" bgGradient="linear(to right, teal.400, blue.500)">
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
      <Flex>
        <Box
          p="8"
          mt="150"
          mx="auto"
          maxWidth="500px"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <form onSubmit={handleSubmit(handleLogin)}>
            <Text
              fontSize="px"
              fontWeight="bold"
              lineHeight="110%"
              mb="4"
              size="lg"
              letterSpacing="-1%"
            >
              <Center>Student's Login</Center>
            </Text>
            <br></br>
            <FormControl isInvalid={errors.email} py="2">
              <FormLabel>Email</FormLabel>
              <Flex>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", emailValidate)}
                  required
                />

                <Box ml="2">
                  <RiUserFill size="20px" color="gray.500" />
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={errors.password} mb="4">
              <FormLabel>Password</FormLabel>
              <Flex>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", passwordValidate)}
                  required
                />

                <Box ml="2">
                  <RiLockPasswordFill size="20px" color="gray.500" />
                </Box>
              </Flex>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              width="full"
              mt="4"
              type="submit"
              colorScheme="teal"
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Logging In"
            >
              Login
            </Button>
            <span>
              <Text fontSize="xlg" align="center" mt="6">
                Don't have an account?{" "}
                <Link
                  as={RouterLink}
                  to={REGISTER}
                  color="teal.880"
                  fontWeight="medium"
                  textDecor="underline"
                  _hover={{ background: "teal.100" }}
                >
                  Register{" "}
                </Link>
                Here!
              </Text>
            </span>
            <span>
              <Link
                as={RouterLink}
                to={FORPW}
                fontWeight="medium"
                textDecor="underline"
                _hover={{ background: "teal.100" }}
              >
                Forgot password
              </Link>
            </span>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
