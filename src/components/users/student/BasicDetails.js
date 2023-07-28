import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  setDoc,
  doc,
  where,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "firebase-auth";
import { uuidv4 } from "@firebase/util";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  useToast,
  Box,
  HStack,
  Heading,
  Button,
  VStack,
  Text,
  Input,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import useAuth from "hooks/auth";
import TextareaAutosize from "react-textarea-autosize";
import { useParams } from "react-router-dom";

function useAddDetails() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addDetails(details) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "students", id), {
      ...details,
      id,
      date: Date.now(),
    });

    toast({
      title: "Details added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 2000,
    });

    setLoading(false);
  }
  return { addDetails, isLoading };
}

export default function Basic() {
  const { register, handleSubmit, reset } = useForm();
  const { addDetails, isLoading: addingDet } = useAddDetails();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddDet(data) {
    addDetails({
      uid: user.id,
      fname: data.fname,
      dob: data.dob,
      gender: data.gender,
      college: data.college,
      course: data.course,
      batch: data.batch,
      roll: data.roll,
      caddress: data.caddress,
      paddress: data.paddress,
    });
    reset();
  }

  const textStyle = {
    fontSize: "l",
    fontWeight: "bold",
  };
  const input = {
    border: "1px",
    resize: "horizontal",
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
      <form onSubmit={handleSubmit(handleAddDet)}>
        <HStack justify="space-between" mb="10">
          <Heading size="lg">Basic Details</Heading>
          <Button
            mr={5}
            bgColor="purple.800"
            colorScheme="white"
            type="submit"
            isLoading={addingDet || authLoading}
          >
            update Profile
          </Button>
        </HStack>
        <Box justifyItems="center">
          <Text sx={textStyle}>Full Name</Text>
          <Input
            sx={input}
            placeholder="name...."
            {...register("fname", { required: true })}
          />

          <Text sx={textStyle}>Date of Birth</Text>
          <Input
            sx={input}
            placeholder="DOB..."
            {...register("dob", { required: true })}
          />

          <Text sx={textStyle}>Gender</Text>
          <Input
            sx={input}
            placeholder="Male/Female/others"
            {...register("gender", { required: true })}
          />

          <Text sx={textStyle}>Current/Latest college</Text>
          <Input
            sx={input}
            placeholder="HITAM"
            {...register("college", { required: true })}
          />
          <Text sx={textStyle}>Current Course</Text>
          <Input
            sx={input}
            placeholder="CSE , ECE...."
            {...register("course", { required: true })}
          />
          <Text sx={textStyle}>Batch</Text>
          <Input
            sx={input}
            placeholder="2023 passout.."
            {...register("batch", { required: true })}
          />
          <Text sx={textStyle}>Roll Number</Text>
          <Input sx={input} {...register("roll", { required: true })} />
          <Text sx={textStyle}>Permanent address</Text>
          <Input
            sx={input}
            minRows={4}
            as={TextareaAutosize}
            {...register("paddress", { required: true })}
          />
          <Text sx={textStyle}>Current address</Text>
          <Input
            sx={input}
            minRows={4}
            as={TextareaAutosize}
            {...register("caddress", { required: true })}
          />
        </Box>
      </form>
    </Box>
  );
}

// Retrieving Data

export function useDetails(collectionName = "students", uid = null) {
  const q = uid
    ? query(
        collection(db, "students"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "students"), orderBy("date", "desc"));
  const [details, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { details, isLoading };
}

export function Details({ info }) {
  const { id } = useParams();
  const { details, isLoading: detailsLoading } = useDetails("students", id);

  if (detailsLoading)
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );

  return (
    <>
      <Box ml="10" mt={10} px="4" align="left">
        {details?.length === 0 ? (
          <Text textAlign="center" fontSize="xl">
            No Details added...
          </Text>
        ) : (
          details?.map((info) => <Info key={info.id} info={info} />)
        )}
      </Box>
    </>
  );
}

export function Info({ info }) {
  const {
    fname,
    dob,
    gender,
    college,
    course,
    batch,
    roll,
    caddress,
    paddress,
  } = info;
  const labelStyle = {
    fontWeight: "bold",
  };
  return (
    <Box
      w="100%"
      p="4"
      bg="white"
      boxShadow="md"
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <VStack spacing="4" alignItems="left">
        <Text sx={labelStyle}>Full Name: {fname}</Text>
        <Text sx={labelStyle}>Date of Birth: {dob}</Text>
        <Text sx={labelStyle}>Gender: {gender}</Text>
        <Text sx={labelStyle}>Current College/Institute: {college}</Text>
        <Text sx={labelStyle}>Course: {course}</Text>
        <Text sx={labelStyle}>Batch: {batch}</Text>
        <Text sx={labelStyle}>Roll Number: {roll}</Text>
        <Text sx={labelStyle}>Current Address: {caddress}</Text>
        <Text sx={labelStyle}>Permanent Address: {paddress}</Text>
      </VStack>
    </Box>
  );
}
