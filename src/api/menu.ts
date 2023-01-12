import type { MenuItem } from "../types/MenuItem";

export async function getMenu() {
  const menuRes = await fetch(`${import.meta.env.PUBLIC_MENUS_URL}/menu1`);
  return (await menuRes.json()).items as MenuItem[];
}
