import express, { Request, Response } from "express";
import path from "path";
import { posts } from "./data/list";
import { Post } from "./types/posts";
import { number, z } from "zod";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));

const next_posts_load_state_schema = z.object({
  page: number(),
  offset: number(),
});

app.get("/", async (req: Request, res: Response) => {
  const initialPosts: Post[] = posts.slice(0, 10);

  res.status(200).render("main", { data: { posts: initialPosts } });
});

app.get("/loadNext", async (req: Request, res: Response) => {
  const page: number = parseInt(req.query.page as string, 10);
  const offset: number = parseInt(req.query.offset as string, 10);

  const nextPosts: Post[] = posts.slice(offset, 10 * page);

  res.status(200).render("list", { data: { posts: nextPosts } });
});

app.get("/:postId", async (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.postId as string, 10);

  const post: Post | null = posts.find((p) => p.id === postId) ?? null;

  if (!post) {
    return res.status(404).render("error");
  }

  res.status(200).render("main", { data: { post: post } });
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
