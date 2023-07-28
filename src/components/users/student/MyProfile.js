/* eslint-disable no-unused-vars */
import {
  Button,
  SkeletonCircle,
  Flex,
  HStack,
  SkeletonText,
  Stack,
  Text,
  Box,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { PROTECTED } from "Route/routes";
import PostsList from "../feed/post/PostsList";
import { usePosts } from "../feed/AddPosts";
import useUser from "../AllUsers";
import { useParams } from "react-router-dom";
import Avatar from "../Avatar";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import useAuth from "hooks/auth";
import { Details, useDetails } from "./BasicDetails";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { details } = useDetails();
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (userLoading)
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );

  return (
    <Stack spacing="3">
      <Flex p={["2", "4"]} pos="relative" align="center" bgColor="purple.600">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="teal"
            onClick={onOpen}
          >
            Change avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            <Text color="gray.900" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>

            <Text color="gray.900" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      {/* <Divider /> */}

      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Posts</Tab>
          <Tab>Blue</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <Flex justify="space-between">
                <Heading size="lg">Basic Details</Heading>
                <Button
                  mr={5}
                  bgColor="purple.800"
                  colorScheme="white"
                  type="submit"
                  loadingText="loading"
                >
                  <NavLink to={`${PROTECTED}/details/${user.id}`}>
                    Update Profile
                  </NavLink>
                </Button>
              </Flex>
              <Details details={details} />
            </Box>
          </TabPanel>
          <TabPanel>
            {postsLoading ? <SkeletonText /> : <PostsList posts={posts} />}
          </TabPanel>
          <TabPanel>Red, yellow and blue.</TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
