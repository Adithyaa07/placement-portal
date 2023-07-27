import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "../AllUsers";
import User from "./User";

export default function Users() {
  const { users, isLoading } = useUsers();

  if (isLoading) return "Loading...";

  return (
    <SimpleGrid ml={50} columns={[3 , 4, 5]} spacing={[2, 3]} px="10px" py="6">
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
}