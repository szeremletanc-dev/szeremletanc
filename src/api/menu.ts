import type { MenuItem } from "../types/MenuItem";

const menuRes = await fetch(`${import.meta.env.PUBLIC_MENUS_URL}/menu1`);
export const menu = (await menuRes.json()).items as MenuItem[];