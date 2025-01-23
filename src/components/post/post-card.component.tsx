import type { Post } from "@/shared/types/post.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CommentList } from "../comments/comment-list.component";
import { groupComments } from "@/service/comments.service";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { CommentInput } from "../comments/comment-input.component";
import { useCreateComment } from "@/hooks/comments/comments.hooks";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const commentGroups = useMemo(
    () => groupComments(post.comments, post.id),
    [post.comments, post.id]
  );

  const [isCommentInputVisible, setIsCommentInputVisible] = useState(false);
  const { mutateAsync: createComment } = useCreateComment(post.id);

  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{post.title}</CardTitle>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsCommentInputVisible((visible) => !visible);
              }}
            >
              {isCommentInputVisible ? "Hide" : "Reply"}
            </Button>
          </div>
          <CardDescription>{post.author.name}</CardDescription>
        </CardHeader>
        <CardContent>{post.description}</CardContent>

        {isCommentInputVisible && (
          <CardFooter>
            <CommentInput
              onSubmit={async (value) => {
                await createComment({
                  content: value,
                });
                setIsCommentInputVisible(false);
              }}
            />
          </CardFooter>
        )}
      </Card>

      <CommentList
        className="mb-6"
        comments={commentGroups}
      />
    </div>
  );
};

export { PostCard };
