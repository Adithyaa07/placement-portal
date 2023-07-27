import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Flex, VStack, Text, Icon, Link, Divider, Box } from "@chakra-ui/react";
import { HOME, PROTECTED } from "Route/routes";
import { FaUser, FaHdd, FaCalendar, FaCog, FaUniversity } from "react-icons/fa";
import { CgHello } from "react-icons/cg";
import useAuth from "hooks/auth";

function SideBarL() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading...";

  return (
    <div>
      <Box
        bg="gray.800"
        w="64"
        color="white"
        minH="100vh"
        p="4"
        position="fixed"
        top="0"
        left="0"
       
      >
        <Flex alignItems="center" mb="8">
          <Link
            color="teal"
            as={RouterLink}
            to={HOME}
            fontWeight="bold"
            fontSize={25}
          >
            Placement Cell
          </Link>
        </Flex>

        <VStack spacing="4" align="start">
          <Flex align="center">
            <Icon as={CgHello} boxSize="6" mr="3" />
            Welcome {user.username}
          </Flex>
          <NavLink to="/" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaUniversity} boxSize="6" mr="3" />

              <Text mt="20px" m="5px">
                Home
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/protected/drives"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaHdd} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Job Profiles
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to={`${PROTECTED}/profile/${user.id}`}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaUser} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                My Profile
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/protected/interviews"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaHdd} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Interviews
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/protected/events"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            <Flex align="center">
              <Icon as={FaCalendar} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Events
              </Text>
            </Flex>
          </NavLink>
          <Link href="#" color="white" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Icon as={FaCog} boxSize="6" mr="3" />
              <Text mt="20px" m="5px">
                Settings
              </Text>
            </Flex>
          </Link>
        </VStack>

        <Divider mt="8" borderColor="gray.600" />

        <Text mt="8" fontSize="sm" color="gray.400">
          © 2023 Placement Portal. All rights reserved.
        </Text>
      </Box>
    </div>
  );
}

export default SideBarL;
