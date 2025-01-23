import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CommentWithNesting } from "@/service/comments.service";
import { CommentInput } from "./comment-input.component";
import { useCreateComment } from "@/hooks/comments/comments.hooks";

type CommentCardProps = {
  comment: CommentWithNesting;
};

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const [isCommentInputVisible, setIsCommentInputVisible] = useState(false);
  const { mutateAsync: createComment } = useCreateComment(comment.postId);

  return (
    <>
      <Card className="rounded-md shadow-sm">
        <CardHeader className="px-3 pt-2 pb-0 items-center flex-row justify-between">
          <CardTitle className="text-sm text-muted-foreground">
            {comment.author.name}
          </CardTitle>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setIsCommentInputVisible((visible) => !visible);
            }}
          >
            {isCommentInputVisible ? "Hide" : "Reply"}
          </Button>
        </CardHeader>
        <CardContent className="px-3 pt-0 pb-2">{comment.content}</CardContent>

        {isCommentInputVisible && (
          <CardFooter className="px-3 pb-2">
            <CommentInput
              onSubmit={async (value) => {
                await createComment({
                  content: value,
                  replyTo: comment.id,
                });
                setIsCommentInputVisible(false);
              }}
            />
          </CardFooter>
        )}
      </Card>
    </>
  );
};

type CommentCardWrapperProps = {
  comment: CommentWithNesting;
  // to avoid recursive file import
  listElement: React.FC<{ comments: CommentWithNesting[] }>;
};

const CommentCardWrapper: React.FC<CommentCardWrapperProps> = ({
  comment,
  listElement: ListElement,
}) => (
  <div className="flex flex-col gap-1">
    <CommentCard comment={comment} />
    <ListElement comments={comment.comments} />
  </div>
);

export { CommentCardWrapper as CommentCard };
