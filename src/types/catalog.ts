import { StaticImageData } from "next/image";

export type Imageish = string | StaticImageData

export type Category = {
  id: string;              // stable id, e.g., "bread"
  name: string;            // "Bread"
  slug: string;            // "bread"
  image: Imageish;         // category hero/thumb
  description?: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;              // "sourdough"
  name: string;            // "Sourdough"
  slug: string;            // "sourdough"
  image: Imageish;
  description?: string;
  parentId: string;        // category id
};