"use client";
import ProductGrid from "@/components/products/product-grid";
import { dummy_breads, TBread } from "@/data/dummy-bread";
import { useState } from "react";
import Fuse from "fuse.js";
import ProductBanner from "@/components/products/product-banner";
import ProductFiltering from "@/components/products/product-filtering";
import { useAppSelector } from "@/redux/store/hooks";
import { selectVisibleProducts } from "@/redux/store/selectors";
export default function ProductsPage() {
  const categories = Array.from(new Set(dummy_breads.map((p) => p.category)));

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const { query, sort } = useAppSelector((s) => s.productFilter);
  const filteredProduct = useAppSelector(selectVisibleProducts)
  const fuse = new Fuse(dummy_breads, {
    keys: ["name", "description", "category", "tags"],
    threshold: 0.3,
  });
  console.log(sort)
  const results = query ? fuse.search(query).map((r) => r.item) : dummy_breads;
  return (
    <main className="px-5 md:px-[10%] pb-16">
      <ProductBanner />
      <ProductFiltering categories={categories} results={results} />
      <section id="products" className="mt-6">
        <ProductGrid products={filteredProduct} />
      </section>
    </main>
  );
}
