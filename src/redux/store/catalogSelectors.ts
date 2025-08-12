// src/store/catalogSelectors.ts
import { CATEGORIES } from "@/data/categories";
import { dummy_breads } from "@/data/dummy-bread"; // or unified products array

export const selectCategories = () => CATEGORIES;


export const selectCategoryBySlug = (slug: string) =>
  CATEGORIES.find(c => c.slug === slug);

export const selectSubcategoryBySlugs = (catSlug: string, subSlug: string) => {
  const cat = selectCategoryBySlug(catSlug);
  return cat?.subcategories.find(s => s.slug === subSlug);
};

export const selectProductsByCategory = (categoryId: string) =>
  dummy_breads.filter(p => p.categoryId === categoryId);

export const selectProductsBySubcategory = (categoryId: string, subId: string) =>
  dummy_breads.filter(p => p.categoryId === categoryId && p.subcategoryId === subId);

