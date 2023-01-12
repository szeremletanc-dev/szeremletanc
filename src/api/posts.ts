import type { Post } from "../types/Post";

export async function getPosts() {
  const postsRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts`);
  return (await postsRes.json()) as Post[];
}
