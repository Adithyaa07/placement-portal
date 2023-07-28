import { Box, HStack, Heading, Button, Textarea, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { useAddPost } from "./AddPosts";
import { useForm } from "react-hook-form";
import useAuth from "hooks/auth";
import PostsList from "./post/PostsList";
import { usePosts } from "./AddPosts";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box
      // ml={260}
      maxWidth="900px"
      height="-moz-max-content"
      w="100%"
      py="4"
      position="sticky"
      
    >
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            mr={5}
            bgColor="purple.800"
            colorScheme="white"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText= "Loading..."
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          mt={5}
          resize="none"
          placeholder="create a new post.."
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}

export default function Feed() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>;

  return (
    <>
      <NewPost />
      <PostsList posts={posts} />
    </>
  );
}
