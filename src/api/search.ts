import type { Node } from "../types/Node";

export async function search(query: string): Promise<Node[]> {
  const results: Node[] = [];

  let pages;
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?search=${query}`);
    pages = await res.json();
  } catch {}

  let posts;
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/posts?search=${query}`);
    posts = await res.json();
  } catch {}

  results.push(...pages, ...posts);

  return results;
}
