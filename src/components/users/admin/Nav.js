import { useLogout } from "hooks/auth";
import { NavLink } from "react-router-dom";
import {
  Icon,
  Flex,
  Spacer,
  IconButton,
  Center,
  Menu,
  MenuButton,
  Text,
  Avatar,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";
function Nav() {
  const { logout, isLoading } = useLogout();
  return (
    <div>
      <Flex as="Nav" bg="gray.800" height="60px">
        <Flex px="4" w="full" align="center" maxW="1600px">
          <Spacer />
          <Text color="teal" fontWeight="bold" fontSize={35} mt="20px">
            <Center>Admin's Dashboard</Center>
          </Text>

          <Spacer />
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            bg="white"
            icon={<Icon as={HiOutlineBell} boxSize="6" />}
            mr="4"
          />

          <Menu align="left">
            <MenuButton as={IconButton} aria-label="Profile">
              <Avatar size="sm" src="/path/to/profile-image.jpg" />
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <NavLink to="/">
                <MenuItem onClick={logout} isLoading={isLoading}>
                  Logout
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </div>
  );
}

export default Nav;
