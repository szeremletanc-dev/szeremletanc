import type { Post } from "../types/Post";

export async function getPosts(): Promise<Post[]> {
  let result: Post[] = [];
  try {
    const postsRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts`);
    result = (await postsRes.json()) as Post[];
  } catch {}
  return result;
}
