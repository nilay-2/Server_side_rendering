import { Post } from "../types/posts";

const posts: Post[] = [];

for (let i = 0; i <= 100; i++) {
  posts.push({ id: i, message: "Medium.dev is amazing" });
}

export { posts };
