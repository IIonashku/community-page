import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostFunctionNames } from "../posts/posts.hooks";
import { Post } from "@/shared/types/post.types";
import { createComment } from "@/service/comments.service";

export const useCreateComment = (postId: Post["id"]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (...args: Parameters<typeof createComment>) =>
      Promise.resolve(createComment(...args)),
    onSuccess: (data) => {
      queryClient.setQueryData<Post[]>([PostFunctionNames.POSTS], (cache) => {
        return (cache ?? []).map((post) => {
          if (post.id !== postId) {
            return post;
          }

          return {
            ...post,
            comments: [...post.comments, data],
          };
        });
      });
    },
  });
};
