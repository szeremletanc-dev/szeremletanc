import type { Page } from "../types/Page";

export async function getMainPage(): Promise<Page | null> {
  let result: Page | null = null;
  try {
    const mainPageRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?menu_order=1`);
    result = (await mainPageRes.json())[0] as Page;
  } catch {}
  return result;
}
