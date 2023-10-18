import {
  Text,
  Card,
  Box,
  CardHeader,
  CardBody,
  StackDivider,
  Heading,
  Stack,
  Grid,
  Button,
} from "@chakra-ui/react";

import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "firebase-auth";

function useDrives() {
  const [drives, isLoading] = useCollectionData(collection(db, "drives"));
  return { drives, isLoading };
}

function Drive({ drive }) {
  const { title, eligible, role, packages, location, register, description } =
    drive;

  const handleApplyClick = () => {
    window.location.href = register;
  };

  return (
    <>
      <Card bgColor="gray.200" maxW="full">
        <CardHeader>
          <Heading size="xl">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Box>
              <Heading fontSize="xl">Eligibility</Heading>
              <Text fontSize="l">{eligible}</Text>
            </Box>
            <Box>
              <Heading fontSize="xl">Role</Heading>
              <Text fontSize="l">{role}</Text>
            </Box>
            <Box>
              <Heading fontSize="xl">Package</Heading>
              <Text fontSize="l">{packages}</Text>
            </Box>
            <Box>
              <Heading fontSize="xl">Location</Heading>
              <Text fontSize="l">{location}</Text>
            </Box>
            <Box>
              <Heading fontSize="xl">Register here</Heading>
              <Text fontSize="l">{register}</Text>
            </Box>
            <Box>
              <Heading fontSize="xl">Job Description</Heading>
              <Text pt="1" fontSize="l">
                {description}
              </Text>
            </Box>
            <Button onClick={handleApplyClick}>Apply Now..</Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default function Drives() {
  const { drives, isLoading } = useDrives();

  if (isLoading) return "Loading...";

  return (
    <Box ml={10} boxSize="-moz-fit-content" maxW="1200">
      <Grid gap="3" alignContent="center" px="10px" py="6" ml={20}>
        {drives?.map((drive) => (
          <Drive key={drive.id} drive={drive} />
        ))}
      </Grid>
    </Box>
  );
}
