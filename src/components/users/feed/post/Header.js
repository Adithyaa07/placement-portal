import { Flex, Box, Text } from "@chakra-ui/react";
import useUser from "components/users/AllUsers";
import Avatar from "components/users/Avatar";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "./UsernameButton";

function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />
      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm" color="gray.600">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
