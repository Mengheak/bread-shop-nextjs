import { StaticImageData } from "next/image";
import bread1 from "../../assets/bread1.jpg";
import bread2 from "../../assets/bread2.jpg";
import bread3 from "../../assets/bread3.jpg";
import bread4 from "../../assets/bread4.jpg";
import bread5 from "../../assets/bread5.jpg";
import bread6 from "../../assets/bread6.jpg";

export type TBread = {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  price: number;
  qty: number;
  variations: {
    size: string;
    weight: string;
    extraToppings?: string[];
  }[];
  category: string; 
  categoryId: string; 
  subcategoryId?: string; 
  rating: number;
  isAvailable: boolean;
  tags: string[];
};

export const dummy_breads: TBread[] = [
  {
    id: 1,
    name: "Classic French Baguette",
    description:
      "Crispy crust, airy center — freshly baked in the traditional French style.",
    image: bread1,
    price: 2.99,
    qty: 25,
    variations: [
      { size: "Small", weight: "200g" },
      { size: "Large", weight: "400g" },
    ],
    category: "Baguette",
    categoryId: "bread",
    subcategoryId: "baguette",
    rating: 4.8,
    isAvailable: true,
    tags: ["french", "crispy", "fresh"],
  },
  {
    id: 2,
    name: "Whole Wheat Loaf",
    description:
      "Rich in fiber, baked with premium whole wheat flour for a hearty flavor.",
    image: bread2,
    price: 3.49,
    qty: 30,
    variations: [
      { size: "Small", weight: "300g" },
      { size: "Medium", weight: "500g" },
      { size: "Large", weight: "1kg" },
    ],
    category: "Loaf",
    categoryId: "bread",
    subcategoryId: "loaf",
    rating: 4.6,
    isAvailable: true,
    tags: ["healthy", "fiber", "brown bread"],
  },
  {
    id: 3,
    name: "Sourdough Bread",
    description:
      "Fermented naturally for 24 hours, tangy taste and chewy texture.",
    image: bread3,
    price: 4.25,
    qty: 15,
    variations: [
      { size: "Round", weight: "500g" },
      { size: "Large Round", weight: "1kg" },
    ],
    category: "Artisan",
    categoryId: "bread",
    subcategoryId: "sourdough",
    rating: 4.9,
    isAvailable: true,
    tags: ["artisan", "sourdough", "fermented"],
  },
  {
    id: 4,
    name: "Chocolate Chip Brioche",
    description:
      "Soft buttery brioche with bursts of rich chocolate chips in every bite.",
    image: bread4,
    price: 3.99,
    qty: 10,
    variations: [
      { size: "Mini", weight: "150g" },
      { size: "Regular", weight: "300g" },
    ],
    category: "Sweet Bread",
    categoryId: "coffee",
    subcategoryId: "cold-brew",
    rating: 4.7,
    isAvailable: true,
    tags: ["sweet", "chocolate", "soft"],
  },
  {
    id: 5,
    name: "Garlic Herb Focaccia",
    description:
      "Fluffy flatbread infused with garlic, rosemary, and olive oil.",
    image: bread5,
    price: 5.25,
    qty: 8,
    variations: [
      { size: "Square", weight: "400g" },
      { size: "Family Size", weight: "800g" },
    ],
    category: "Flatbread",
    categoryId: "coffee",
    subcategoryId: "latte",
    rating: 4.5,
    isAvailable: true,
    tags: ["garlic", "herb", "olive oil"],
  },
  {
    id: 6,
    name: "Multigrain Seeded Bread",
    description:
      "Packed with sunflower, flax, and pumpkin seeds for extra crunch.",
    image: bread6,
    price: 4.75,
    qty: 20,
    variations: [
      { size: "Small", weight: "250g" },
      { size: "Large", weight: "500g" },
    ],
    category: "Healthy",
    categoryId: "bread",
    subcategoryId: "multigrain",
    rating: 4.8,
    isAvailable: true,
    tags: ["multigrain", "seeds", "crunchy"],
  },
];

export const home_dummy_breads: TBread[] = dummy_breads.slice(0, 3);
