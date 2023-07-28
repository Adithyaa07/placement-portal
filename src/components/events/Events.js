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
} from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "firebase-auth";



function useEvents() {
  const [events, isLoading] = useCollectionData(collection(db, "events"));
  return { events, isLoading };
}

function Event({ event }) {
  const { title, information } = event;

  return (
    <>
      <Card bgColor="gray.200" maxW="full">
        <CardHeader>
          <Heading size="xl">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Box>
              <Heading fontSize="xl">Details</Heading>
              <Text fontSize="l">{information}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default function Events() {
  const { events, isLoading } = useEvents();

  if (isLoading) return "Loading...";

  return (
    <Box ml={10} boxSize="-moz-fit-content" maxW="1200">
      <Grid gap="3" alignContent="center" px="10px" py="6" ml={20}>
        {events?.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </Grid>
    </Box>
  );
}
