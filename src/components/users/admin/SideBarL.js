import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import HOME from "Route/routes";
import {
  Flex,
  VStack,
  Text,
  Icon,
  Link,
  Divider,
  Box,
  HStack,
} from "@chakra-ui/react";
import { FaUser, FaHdd, FaCalendar, FaCog, FaUniversity } from "react-icons/fa";

function SideBarL() {
  return (
    <Box>
      <HStack
        bg="gray.800"
        width="64"
        color="white"
        minH="full"
        p="4"
        alignContent="initial"
        position="fixed"
        top="0"
        left="0"
      >
        <Box>
          <VStack spacing="4" align="initial">
            <Flex mb="8" mt={-150}>
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

            <NavLink to="/" color="white">
              <Flex>
                <Icon as={FaUniversity} boxSize="6" mr="3" />
                <Text mt="20px" m="5px">
                  Home
                </Text>
              </Flex>
            </NavLink>
            <NavLink
              to="/protected/addDrive"
              color="white"
              _hover={{ textDecoration: "none" }}
            >
              <Flex align="center">
                <Icon as={FaHdd} boxSize="6" mr="3" />
                <Text mt="20px" m="5px">
                  Add Job Profiles
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
              to="/protected/users"
              color="white"
              _hover={{ textDecoration: "none" }}
            >
              <Flex align="center">
                <Icon as={FaUser} boxSize="6" mr="3" />
                <Text mt="20px" m="5px">
                  User's Profile
                </Text>
              </Flex>
            </NavLink>
            <NavLink
              to="/protected/addDrive"
              color="white"
              _hover={{ textDecoration: "none" }}
            >
              <Flex align="center">
                <Icon as={FaHdd} boxSize="6" mr="3" />
                <Text mt="20px" m="5px">
                  Add Interviews
                </Text>
              </Flex>
            </NavLink>
            <NavLink
              to="/protected/addEvent"
              color="white"
              _hover={{ textDecoration: "none" }}
            >
              <Flex align="center">
                <Icon as={FaCalendar} boxSize="6" mr="3" />
                <Text mt="20px" m="5px">
                  Add Events
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
            <Divider mt="8" borderColor="gray.600" />

            <Text mt="8" fontSize="sm" color="gray.400">
              © 2023 Your App. All rights reserved.
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default SideBarL;
