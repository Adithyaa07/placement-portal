import { Avatar as ChakraAvatar } from "@chakra-ui/react";

function Avatar({ user }) {
  if (!user) return "Loading";
  return <ChakraAvatar name={user.username} src={user.avatar} />;
}

export default Avatar;
