import ProductGrid from "@/components/products/product-grid";
import MainHeros from "@/components/sections/main-hero";
import {  home_dummy_breads } from "@/data/dummy-bread";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bread-shop homepage",
  description: "Freshly baked bread and coffee for you.",
};

export default function Home() {
  return (
    <main className="px-5 md:px-[10%] ">
      <MainHeros />
      <div className="h-20"/>
      <ProductGrid products={home_dummy_breads}/>
    </main>
  );
}
