import { Post } from "@/shared/types/post.types";
import { PostCard } from "./post-card.component";

import { PostTrigger } from "./form/post-trigger.component";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg text-muted-foreground">Posts</h3>
        <PostTrigger />
      </div>
      <div className="flex flex-col gap-y-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export { PostList };
