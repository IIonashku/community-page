import { Post } from "@/shared/types/post.types";
import { generateId } from "../shared/helpers/id.helper";
import { POSTS } from "@/service/mocks";

export const getPosts = () => {
  return POSTS;
};

export const createPost = (data: Pick<Post, "title" | "description">): Post => {
  return {
    ...data,
    id: generateId(),
    author: {
      id: 1,
      name: "John Doe",
    },
    comments: [],
  };
};
