import type { Node } from "../types/Node";
import type { Page } from "../types/Page";
import type { Post } from "../types/Post";

export async function getNode(uri: string): Promise<Node | null> {
  let result: Node | null = null;

  // is it a page?
  try {
    const pageRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?slug=${uri}`);
    const page = (await pageRes.json())[0] as Page;
    result = page ? page : result;
  } catch {}

  // is it a post?
  try {
    const postRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts?slug=${uri}`);
    const post = (await postRes.json())[0] as Post;
    result = post ? post : result;
  } catch {}

  return result;
}
