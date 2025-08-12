// app/categories/[category]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import {
  selectCategoryBySlug,
  selectProductsByCategory,
} from "../../../redux/store/catalogSelectors";
import ProductGrid from "@/components/products/product-grid";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

type Params = Promise<{ category: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cat = selectCategoryBySlug(category);
  if (!cat) return notFound();

  const products = selectProductsByCategory(cat.id);

  return (
    <main className="px-5 md:px-[10%] pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">
              Category
            </p>
            <h1 className="mt-1 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
              {cat.name}
            </h1>
            {cat.description && (
              <p className="mt-3 text-[#f5e6d3]/80">{cat.description}</p>
            )}
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden ring-1 ring-white/10">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {cat.subcategories.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#f5e6d3] mb-3">
            Explore {cat.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.subcategories.map((s) => (
              <a
                key={s.id}
                href={`/categories/${cat.slug}/${s.slug}`}
                className="group bg-[#2a1e14] rounded-xl border border-white/10 overflow-hidden hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)] transition"
              >
                <div className="relative h-40">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[#f5e6d3] font-semibold">{s.name}</div>
                  {s.description && (
                    <p className="text-sm text-[#e2c9a6]">{s.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#f5e6d3] mb-3">
          All {cat.name}
        </h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
