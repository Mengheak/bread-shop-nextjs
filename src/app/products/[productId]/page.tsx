// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dummy_breads } from "@/data/dummy-bread";

export default function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = dummy_breads.find((p) => String(p.id) === params.productId);
  if (!product) return notFound();

  const related = dummy_breads
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="px-5 md:px-[10%] py-10 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-[#f5e6d3]/70">
        <Link href="/" className="hover:text-[#f5e6d3] transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-[#f5e6d3] transition">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#f5e6d3]">{product.name}</span>
      </nav>

      {/* Main block */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image side */}
        <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#1a120b]/60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {/* soft glows */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#d9a066] opacity-10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#8b4513] opacity-10 blur-3xl" />
        </div>

        {/* Details side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
            {product.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4">
            <span className="text-[#d9a066] text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-[#f5e6d3]">
              ⭐ {product.rating.toFixed(1)}
            </span>
            <span
              className={`text-sm ${
                product.isAvailable ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {product.isAvailable ? "In stock" : "Out of stock"}
            </span>
          </div>

          <p className="mt-4 text-[#f5e6d3]/85">{product.description}</p>

          {/* Variations */}
          {product.variations?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-[#f5e6d3] font-semibold mb-2">
                Choose a size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variations.map((v, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 rounded-lg border border-[#d9a066]/30 text-[#f5e6d3]
                               hover:bg-[#d9a066]/10 transition"
                  >
                    {v.size} • {v.weight}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags & qty */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {product.tags?.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-xs bg-[#1a120b]/60 text-[#e2c9a6] border border-white/10"
              >
                #{t}
              </span>
            ))}
            <span className="ml-auto text-sm text-[#e2c9a6]">
              Stock: {product.qty}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              className="px-5 py-2.5 rounded-lg
                         bg-gradient-to-r from-[#d9a066] to-[#8b4513]
                         text-white font-semibold
                         hover:from-[#e2ac6f] hover:to-[#9c5930]
                         hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                         transition-all duration-300"
            >
              Add to Cart
            </button>
            <button className="px-5 py-2.5 rounded-lg border border-[#d9a066]/40 text-[#f5e6d3] hover:bg-[#d9a066]/10 transition">
              Add to Favorites
            </button>
          </div>

          {/* Meta */}
          <div className="mt-6 space-y-1 text-sm text-[#e2c9a6]">
            <p>Category: {product.category}</p>
            <p>Product ID: {product.id}</p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="pt-6 border-t border-white/10">
          <h2 className="text-2xl font-bold text-[#f5e6d3]">
            You might also like
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#2a1e14] hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)] transition-all"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#f5e6d3] font-medium">{item.name}</h3>
                    <span className="text-[#d9a066] font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#e2c9a6] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
