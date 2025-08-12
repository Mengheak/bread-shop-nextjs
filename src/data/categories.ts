// src/data/categories.ts
import type { Category } from "@/types/catalog";
import breadCatImg from "../../assets/categoies/bread-cat.jpg";
import coffeeCatImg from "../../assets/categoies/coffee-cat.jpg";

import sourdoughImg from "../../assets/categoies/bread-sub1.jpg";
import baguetteImg from "../../assets/categoies/bread-sub2.jpg";
import briocheImg from "../../assets/categoies/bread-sub3.jpg"

import espressoImg from "../../assets/categoies/coffee-sub1.jpg";
import latteImg from "../../assets/categoies/coffee-sub2.jpg";
import coldbrewImg from "../../assets/categoies/coffee-sub3.jpg";

export const CATEGORIES: Category[] = [
  {
    id: "bread",
    name: "Bread",
    slug: "bread",
    image: breadCatImg,
    description: "From rustic sourdoughs to buttery brioche.",
    subcategories: [
      { id: "sourdough", name: "Sourdough", slug: "sourdough", image: sourdoughImg, parentId: "bread" },
      { id: "baguette",  name: "Baguette",  slug: "baguette",  image: baguetteImg,  parentId: "bread" },
      { id: "brioche",   name: "Brioche",   slug: "brioche",   image: briocheImg,   parentId: "bread" },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    slug: "coffee",
    image: coffeeCatImg,
    description: "Single origins, blends, and cozy café classics.",
    subcategories: [
      { id: "espresso",  name: "Espresso",  slug: "espresso",  image: espressoImg,  parentId: "coffee" },
      { id: "latte",     name: "Latte",     slug: "latte",     image: latteImg,     parentId: "coffee" },
      { id: "cold-brew", name: "Cold Brew", slug: "cold-brew", image: coldbrewImg,  parentId: "coffee" },
    ],
  },
];
