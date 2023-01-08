import type { Post } from "../types/Post";

const postsRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts`);
export const posts = await postsRes.json() as Post[];