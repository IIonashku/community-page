import { Post } from "@/shared/types/post.types";

export const POSTS: Post[] = [
  {
    id: 1,
    title: "The Future of AI",
    description:
      "Artificial intelligence is rapidly evolving, impacting industries from healthcare to finance. Explore the latest trends and challenges in AI development.",
    author: { id: 101, name: "Alice Johnson" },
    comments: [
      {
        id: 1,
        content: "AI is indeed the future! Great insights.",
        author: { id: 201, name: "Robert Miller" },
      },
      {
        id: 2,
        content: "Looking forward to more discussions on AI ethics.",
        author: { id: 202, name: "Sarah Thompson" },
      },
      {
        id: 3,
        content: "Totally agree! Ethics in AI is a major challenge.",
        replyTo: 2,
        author: { id: 203, name: "Daniel Wright" },
      },
    ],
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    description:
      "TypeScript enhances JavaScript with static types, making code more reliable and maintainable. Learn the fundamentals and best practices for using TypeScript.",
    author: { id: 102, name: "Michael Smith" },
    comments: [
      {
        id: 4,
        content: "TypeScript has improved my productivity significantly.",
        author: { id: 204, name: "Emma Davis" },
      },
      {
        id: 5,
        content: "Same here! The type safety is a game changer.",
        replyTo: 4,
        author: { id: 205, name: "James Brown" },
      },
    ],
  },
  {
    id: 3,
    title: "Next.js vs. React: Which to Choose?",
    description:
      "Next.js brings server-side rendering and static site generation to React. Compare the benefits of using Next.js over plain React for your projects.",
    author: { id: 103, name: "Emily Davis" },
    comments: [
      {
        id: 6,
        content: "I love Next.js for SEO benefits!",
        author: { id: 206, name: "Sophia Martinez" },
      },
      {
        id: 7,
        content: "React still has its place though, depending on the project.",
        replyTo: 6,
        author: { id: 207, name: "William Lee" },
      },
    ],
  },
  {
    id: 4,
    title: "The Rise of Web3",
    description:
      "Web3 is changing the internet landscape with decentralized applications and blockchain technology. Dive into the world of smart contracts and DAOs.",
    author: { id: 104, name: "Chris Anderson" },
    comments: [
      {
        id: 8,
        content: "Web3 is the future! Decentralization is the way to go.",
        author: { id: 208, name: "Ethan Carter" },
      },
      {
        id: 9,
        content: "Not sure, scalability is still an issue.",
        replyTo: 8,
        author: { id: 209, name: "Olivia White" },
      },
    ],
  },
  {
    id: 5,
    title: "Building Scalable APIs with NestJS",
    description:
      "NestJS provides a powerful framework for building efficient, scalable Node.js applications. Learn how to structure your API for performance and maintainability.",
    author: { id: 105, name: "Sophia Martinez" },
    comments: [
      {
        id: 10,
        content: "NestJS has amazing architecture patterns!",
        author: { id: 210, name: "David Johnson" },
      },
      {
        id: 11,
        content: "Yes! Dependency injection makes life easier.",
        replyTo: 10,
        author: { id: 211, name: "Charlotte Brown" },
      },
    ],
  },
];
