export type Post = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  author: number;
  categories: number[];
  type: "post"
  menu_order: never;
}