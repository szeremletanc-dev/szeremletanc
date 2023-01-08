import type { Page } from "../types/Page";

const pageForPostsRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?page_for_posts`);
export const pageForPosts = (await pageForPostsRes.json())[0] as Page;