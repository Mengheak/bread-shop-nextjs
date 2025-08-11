import ProductGrid from "@/components/products/product-grid";
import { dummy_breads } from "@/data/dummy-bread";

export default function ProductsPage() {
  const categories = Array.from(new Set(dummy_breads.map((p) => p.category)));

  return (
    <main className="px-5 md:px-[10%] pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
        <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#d9a066] opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#8b4513] opacity-10 blur-3xl" />

        <svg
          aria-hidden="true"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-24 -z-0"
        >
          <path d="M0,0 C300,80 900,0 1200,60 L1200,0 Z" fill="#3e2723" fillOpacity="0.9" />
        </svg>

        <div className="relative z-10 px-6 md:px-10 py-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">Fresh • Daily</p>

          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
            Our Breads & Coffee Pairings
          </h1>

          <p className="mt-3 max-w-2xl text-[#f5e6d3]/80">
            From crusty baguettes to tangy sourdoughs—find your perfect loaf and a rich cup to match.
            Carefully baked, best served warm.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#products"
              className="inline-block px-4 py-2 rounded-lg
                         bg-gradient-to-r from-[#d9a066] to-[#8b4513]
                         text-white font-bold no-underline
                         hover:from-[#e2ac6f] hover:to-[#9c5930]
                         hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                         active:from-[#e2ac6f] active:to-[#9c5930]
                         active:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                         transition-all duration-300"
            >
              Take a sip now
            </a>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Categories (chips) */}
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li
              key={c}
              className="px-3 py-1 rounded-full border border-[#d9a066]/30 cursor-pointer text-[#f5e6d3]/90
                         hover:bg-[#d9a066]/10 transition-colors"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* Search + sort (placeholders to wire later) */}
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="text"
            placeholder="Search breads…"
            className="w-full md:w-64 rounded-lg border border-white/10 bg-[#1a120b]/60
                       px-3 py-2 text-[#f5e6d3] placeholder:text-[#f5e6d3]/50
                       focus:outline-none focus:ring-2 focus:ring-[#d9a066]/50 transition"
          />
          <select
            className="rounded-lg border border-white/10 bg-[#1a120b]/60 px-3 py-2 text-[#f5e6d3]
                       focus:outline-none focus:ring-2 focus:ring-[#d9a066]/50 transition"
            defaultValue="popular"
          >
            <option value="popular">Most popular</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section id="products" className="mt-6">
        <ProductGrid products={dummy_breads} />
      </section>
    </main>
  );
}
