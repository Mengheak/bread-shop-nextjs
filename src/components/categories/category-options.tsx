"use client";

import Image from "next/image";
import Link from "next/link";
import { selectCategories } from "@/redux/store/catalogSelectors";
import type { Category } from "@/types/catalog";

export default function CategoryOptions() {
  const cats = selectCategories();

  if (!cats?.length) {
    return (
      <section className="py-3">
        <div className="rounded-xl border border-white/10 bg-[#2a1e14]/60 p-8 text-center text-[#e2c9a6]">
          No categories yet — add some in your data source.
        </div>
      </section>
    );
  }

  return (
    <main className=" py-3">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
          Shop by Category
        </h1>
        <p className="mt-1 text-sm text-[#e2c9a6]">
          Explore our fresh breads and cozy coffee selections.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </section>
    </main>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const subchips = category.subcategories.slice(0, 3);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#2a1e14]
                 hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)] transition-all"
      aria-label={`Open ${category.name} category`}
    >
      {/* Image */}
      <div className="relative h-44 md:h-56">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={false}
        />
        {/* Top gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[#f5e6d3] font-semibold text-lg">
            {category.name}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-[#d9a066]/15 text-[#d9a066]">
            {category.subcategories.length} sub
          </span>
        </div>

        {category.description && (
          <p className="mt-1 text-sm text-[#e2c9a6] line-clamp-2">
            {category.description}
          </p>
        )}

        {/* Subcategory chips */}
        {subchips.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {subchips.map((s) => (
              <li
                key={s.id}
                className="text-xs px-2 py-1 rounded-full border border-[#d9a066]/30 text-[#f5e6d3]/90
                           group-hover:bg-[#d9a066]/10 transition-colors"
              >
                {s.name}
              </li>
            ))}
            {category.subcategories.length > subchips.length && (
              <li className="text-xs px-2 py-1 rounded-full border border-white/10 text-[#e2c9a6]">
                +{category.subcategories.length - subchips.length} more
              </li>
            )}
          </ul>
        )}

        {/* CTA row */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-[#d9a066] font-medium">
            Explore {category.name}
          </span>
          <svg
            className="w-5 h-5 text-[#d9a066] transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
