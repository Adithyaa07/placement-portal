import { useForm } from "react-hook-form";
import { useState } from "react";
import { uuidv4 } from "@firebase/util";
import {
  useToast,
  Box,
  Heading,
  HStack,
  Button,
  Divider,
  Text,
  Input,
} from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "firebase-auth";

function useAddEvent() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function addEvent(event) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "events", id), {
      ...event,
      id,
      date: Date.now(),
    });
    toast({
      title: "Event added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 2000,
    });
    setLoading(false);
  }
  return { addEvent, loading };
}

export default function AddEvent() {
  const { register, handleSubmit, reset } = useForm();
  const { addEvent, isLoading } = useAddEvent();

  function handleEvent(data) {
    addEvent({
      title: data.title,
      information: data.information,
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
      ml={150}
      height="-moz-max-content"
      w="100%"
      py="4"
      mt="50px"
      position="sticky"
    >
      <form onSubmit={handleSubmit(handleEvent)}>
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
            Add Event
          </Button>
        </HStack>
        <Divider />
        <Box>
          <Text sx={textStyle}>Event name</Text>
          <Input
            sx={input}
            placeholder="Add Company name...."
            {...register("title", { required: true })}
          />
          <Text sx={textStyle}>Description</Text>
          <Input
            sx={input}
            placeholder="Eligibility...."
            {...register("information", { required: true })}
          />
        </Box>
      </form>
    </Box>
  );
}
