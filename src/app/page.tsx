import ProductGrid from "@/components/products/product-grid";
import DiscountSection from "@/components/sections/discount-section";
import MainHeros from "@/components/sections/main-hero";
import { home_dummy_breads } from "@/data/dummy-bread";
import { Metadata } from "next";
import Link from "next/link";
import { FaCoffee } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Bread-shop homepage",
  description: "Freshly baked bread and coffee for you.",
};

export default function Home() {
  return (
    <main className="px-5 md:px-[10%] ">
      <MainHeros />
      <div className="h-20" />
      <DiscountSection />
      <span className="flex itce justify-between">
        <h2 className="text-2xl text-gradient font-extrabold flex uppercase items-center gap-4">
          <FaCoffee size={34} className="text-color" />
          Top sale
        </h2>
        <Link
          href={"/products"}
          className="text-color hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer"
        >
          More...
        </Link>
      </span>
      <ProductGrid products={home_dummy_breads} />
    </main>
  );
}
