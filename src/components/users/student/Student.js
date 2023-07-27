import { HOME } from "Route/routes";
import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "hooks/auth";
import Feed from "../feed/Feed";
import {
  Flex,
  Icon,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";
import useAuth from "hooks/auth";
import SideBarL from "./SideBarL";
import Avatar from "../Avatar";

export default function Student() {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  return (
    <>
      <Flex
        shadow="sm"
        width="full"
        bg="gray.800"
        height="16"
        zIndex="3"
        justify="center"
      >
        <Flex px="4" w="full" align="center" maxW="1600px">
          <Flex align="left">
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
          <Spacer />
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            bg="white"
            icon={<Icon as={HiOutlineBell} boxSize="6" />}
            mr="4"
          />
          <Menu align="left">
            <MenuButton>
              <Avatar user={user} />
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <NavLink to="/student">
                <MenuItem onClick={logout} isLoading={isLoading}>
                  Logout
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <SideBarL />
      <Box ml={300} borderRight="1px solid" borderRightColor="blackAlpha.800">
        <Feed />
      </Box>
    </>
  );
}
