import type { MenuItem } from "../types/MenuItem";

export async function getMenu(): Promise<MenuItem[]> {
  let result: MenuItem[] = [];
  try {
    const menuRes = await fetch(`${import.meta.env.PUBLIC_MENUS_URL}/menu1`);
    result = (await menuRes.json()).items as MenuItem[];
  } catch {}
  return result;
}
