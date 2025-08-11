export default function ProductBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
      <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#d9a066] opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#8b4513] opacity-10 blur-3xl" />

      <svg
        aria-hidden="true"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-24 -z-0"
      >
        <path
          d="M0,0 C300,80 900,0 1200,60 L1200,0 Z"
          fill="#3e2723"
          fillOpacity="0.9"
        />
      </svg>

      <div className="relative z-10 px-6 md:px-10 py-10">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">
          Fresh • Daily
        </p>

        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
          Our Breads & Coffee Pairings
        </h1>

        <p className="mt-3 max-w-2xl text-[#f5e6d3]/80">
          From crusty baguettes to tangy sourdoughs—find your perfect loaf and a
          rich cup to match. Carefully baked, best served warm.
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
  );
}
