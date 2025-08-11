import { TBread } from "@/data/dummy-bread";
import ProductItems from "./product-items";

export default function ProductGrid({ products }: { products: TBread[] }) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {products.map((product, idx) => (
        <ProductItems product={product} key={idx}/>
      ))}
    </main>
  );
}
