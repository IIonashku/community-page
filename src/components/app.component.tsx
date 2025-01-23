import { useGetPosts } from "@/hooks/posts/posts.hooks";
import { PostList } from "./post/post-list.component";

const App = () => {
  const { data } = useGetPosts();

  return (
    <main className="max-w-screen-lg w-full mx-auto py-6 px-4">
      <PostList posts={data ?? []} />
    </main>
  );
};

export { App };
