import { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { setDoc, doc } from "firebase/firestore";
import { db } from "firebase-auth";
import { Divider, Input, useToast } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { Box, HStack, Text, Heading, Button } from "@chakra-ui/react";

function useAddDrive() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addDrive(drive) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "drives", id), {
      ...drive,
      id,
      date: Date.now(),
    });
    toast({
      title: "Drive added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 2000,
    });
    setLoading(false);
  }
  return { addDrive, isLoading };
}

function AddDrives() {
  const { register, handleSubmit, reset } = useForm();
  const { addDrive, isLoading } = useAddDrive();

  function handleAddDrive(data) {
    addDrive({
      title: data.title,
      eligible: data.eligible,
      role: data.role,
      packages: data.packages,
      location: data.location,
      register: data.register,
      description: data.description,
    });
    reset();
  }

  const textStyle = {
    fontSize: "xl",
    fontWeight: "bold",
  };
  const input = {
    border: "1px",
    resize: "none",
    minRows: "2",
    colorScheme: "black",
  };

  return (
    <Box
      maxWidth="900px"
      ml={200}
      height="-moz-max-content"
      w="100%"
      py="4"
      position="sticky"
      mt="30px"
    >
      <form onSubmit={handleSubmit(handleAddDrive)}>
        <HStack justify="space-between">
          <Heading size="lg">New Drives</Heading>
          <Button
            mr={5}
            bgColor="purple.800"
            colorScheme="white"
            type="submit"
            isLoading={isLoading}
            loadingText="loading"
          >
            Add Drive
          </Button>
        </HStack>
        <Divider />
        <Box justifyItems="center">
          <Text sx={textStyle}>Company name</Text>
          <Input
            sx={input}
            placeholder="Add Company name...."
            {...register("title", { required: true })}
          />
          <Text sx={textStyle}>Eligiblity</Text>
          <Input
            sx={input}
            placeholder="Eligibility...."
            {...register("eligible", { required: true })}
          />

          <Text sx={textStyle}>Student Role</Text>
          <Input
            sx={input}
            placeholder="Role of student...."
            {...register("role", { required: true })}
          />
          <Text sx={textStyle}>Package</Text>
          <Input
            sx={input}
            placeholder="package details"
            {...register("packages", { required: true })}
          />
          <Text sx={textStyle}>Location</Text>
          <Input
            sx={input}
            placeholder="remote onsite or both"
            {...register("location", { required: true })}
          />
          <Text sx={textStyle}>Registration Link</Text>
          <Input
            sx={input}
            placeholder="link"
            {...register("register", { required: true })}
          />
          <Text sx={textStyle}>Description</Text>
          <Input
            sx={input}
            minRows={4}
            as={TextareaAutosize}
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </Box>
      </form>
    </Box>
  );
}

export default AddDrives;
