import type { Page } from "../types/Page";

export async function getMainPage() {
  const mainPageRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?menu_order=1`);
  return (await mainPageRes.json())[0] as Page;
}
