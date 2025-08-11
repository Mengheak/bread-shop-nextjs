import Link from "next/link";

export default function DiscountSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#d9a066] to-[#8b4513] text-white rounded-lg overflow-hidden px-6 py-8 md:py-10 my-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            Freshly Baked, Daily!
          </h2>
          <p className="mt-1 text-sm md:text-base text-white/90">
            Get <span className="font-semibold">20% off</span> on all bread & coffee combos this week.
          </p>
        </div>

        {/* Button */}
        <Link href={'/products'} className="px-5 py-2 rounded-lg bg-white text-[#8b4513] font-semibold hover:bg-[#f5f0e9] transition-all duration-300">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
