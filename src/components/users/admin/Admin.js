import Feed from "../feed/Feed";
import Nav from "./Nav";
import SideBarL from "./SideBarL";
import { Box } from "@chakra-ui/react";
export default function Admin() {
  return (
    <>
      <Nav />
      <SideBarL />
      <Box ml={300} borderRight="1px solid" borderRightColor="blackAlpha.800">
        <Feed />
      </Box>
    </>
  );
}
