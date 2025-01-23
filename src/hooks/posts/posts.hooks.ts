import { createPost, getPosts } from "@/service/post.service";
import { Post } from "@/shared/types/post.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const PostFunctionNames = {
  POSTS: "posts",
} as const;

export const useGetPosts = () => {
  return useQuery({
    queryKey: [PostFunctionNames.POSTS],
    queryFn: getPosts,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (...args: Parameters<typeof createPost>) =>
      Promise.resolve(createPost(...args)),
    onSuccess: (data) => {
      // in order to avoid managing CRUD operations with mocks, we just update the existing cache
      queryClient.setQueryData<Post[]>([PostFunctionNames.POSTS], (old) => [
        data,
        ...(old ?? []),
      ]);
    },
  });
};
