import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text } = post;

  return (
    <Box ml={-450} p="2" maxW="700px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="2" minH="80px">
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>
        <Actions post={post} />
      </Box>
    </Box>
  );
}
