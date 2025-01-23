import { CommentWithNesting } from "@/service/comments.service";
import { CommentCard } from "./comment-card.component";
import { cn } from "@/shared/helpers/className.helper";

type CommentListProps = {
  className?: string;
  comments: CommentWithNesting[];
};

const CommentList: React.FC<CommentListProps> = ({ comments, className }) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-1 px-2", className)}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          listElement={CommentList}
        />
      ))}
    </div>
  );
};

export { CommentList };
