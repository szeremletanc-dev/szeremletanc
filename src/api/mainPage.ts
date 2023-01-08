import type { Page } from "../types/Page";

const mainPageRes = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/pages?menu_order=1`);
export const mainPage = (await mainPageRes.json())[0] as Page;