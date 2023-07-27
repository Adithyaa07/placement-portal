import { Button } from "@chakra-ui/react";
import { PROTECTED } from "Route/routes";
import { Link } from "react-router-dom";

function UsernameButton({ user }) {
  return (
    <Button
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      colorScheme="teal"
      variant="link"
    >
      {user.username}
    </Button>
  );
}

export default UsernameButton;
