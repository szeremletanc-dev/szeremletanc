import type { Page } from "../types/Page";
import type { Post } from "../types/Post";

export async function search(uri: string): Promise<Page | Post | null> {
  let result = null;

  // is it a page?
  const pageRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?slug=${uri}`);
  const page = (await pageRes.json())[0] as Page;
  result = page ? page : result;

  // is it a post?
  const postRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts?slug=${uri}`);
  const post = (await postRes.json())[0] as Post;
  result = post ? post : result;

  return result;
}
