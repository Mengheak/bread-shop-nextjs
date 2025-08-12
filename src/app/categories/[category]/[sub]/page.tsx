// app/categories/[category]/[sub]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import {
  selectCategoryBySlug,
  selectSubcategoryBySlugs,
  selectProductsBySubcategory,
} from "../../../../redux/store/catalogSelectors";
import ProductGrid from "@/components/products/product-grid";

type Params = Promise<{ category: string; sub: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { sub, category } = await params;
  if (sub) {
    const cat = selectCategoryBySlug(category);
    const subs = selectSubcategoryBySlugs(category, sub);
    if (!cat || !sub) return {};
    return { title: `${subs?.name} • ${cat.name} | BreadShop` };
  } else {
    const cat = selectCategoryBySlug(category);
    if (!cat) return {};
    return { title: `${cat.name} | BreadShop` };
  }
}

export async function generateStaticParams() {
  return CATEGORIES.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, sub: s.slug }))
  );
}

export const dynamicParams = false;

export default function SubcategoryPage({
  params,
}: {
  params: { category: string; sub: string };
}) {
  const cat = selectCategoryBySlug(params.category);
  const sub = selectSubcategoryBySlugs(params.category, params.sub);
  if (!cat || !sub) return notFound();

  const products = selectProductsBySubcategory(cat.id, sub.id);

  return (
    <main className="px-5 md:px-[10%] pb-16">
      {/* Subcategory hero */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">
              {cat.name}
            </p>
            <h1 className="mt-1 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
              {sub.name}
            </h1>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden ring-1 ring-white/10">
            <Image
              src={sub.image}
              alt={sub.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mt-8">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
