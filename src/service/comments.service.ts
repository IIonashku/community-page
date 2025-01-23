import { generateId } from "@/shared/helpers/id.helper";
import { Comment, Post } from "@/shared/types/post.types";

export type CommentWithNesting = Omit<Comment, "replyTo"> & {
  comments: CommentWithNesting[];
  postId: Post["id"];
};

export const createComment = (data: Pick<Comment, "content" | "replyTo">) => {
  return {
    ...data,
    id: generateId(),
    author: {
      id: 1,
      name: "John Doe",
    },
  };
};

const findReplyComment = (
  parentId: Comment["id"],
  comments: CommentWithNesting[]
): CommentWithNesting | null => {
  for (const comment of comments) {
    if (comment.id === parentId) {
      return comment;
    }

    if (comment.comments.length > 0) {
      const target = findReplyComment(parentId, comment.comments);
      if (target) {
        return target;
      }
    }
  }

  return null;
};

// if there is a need in support of massive amount of comments, a tree structure for comments would be a better fit. Amongst other options are: dealing with it on the backend or using a worker thread
export const groupComments = (comments: Comment[], postId: number) => {
  const processedComments: CommentWithNesting[] = [];

  for (const { replyTo, ...comment } of comments) {
    if (!replyTo) {
      processedComments.push({
        ...comment,
        comments: [],
        postId,
      });
      continue;
    }

    const parent = findReplyComment(replyTo, processedComments);

    if (!parent) {
      console.warn("Comment was not added to the list", {
        ...comment,
        replyTo,
      });
      continue;
    }

    parent.comments.push({
      ...comment,
      comments: [],
      postId,
    });
  }

  return processedComments;
};
