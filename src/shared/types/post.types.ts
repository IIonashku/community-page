export type Comment = {
  id: number;
  content: string;
  replyTo?: Comment["id"];
  author: {
    id: number;
    name: string;
  };
};

export type Post = {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    name: string;
  };
  comments: Comment[];
};
