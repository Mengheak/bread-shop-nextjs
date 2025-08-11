// app/about/page.tsx
"use client";

import Image from "next/image";
import FreshBread from "../../../assets/bread1.jpg";
import user1 from "../../../assets/images/users/user1.jpg"
import user2 from "../../../assets/images/users/user2.jpg"
import user3 from "../../../assets/images/users/user3.jpg"

export default function AboutPage() {
  return (
    <main className="px-5 md:px-[10%] pb-16">
      {/* Hero / Intro */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
        <div className="relative z-10 px-6 md:px-10 py-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">Our Story</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
            About BreadShop
          </h1>
          <p className="mt-3 max-w-2xl text-[#f5e6d3]/80">
            From early morning dough mixing to the aroma of freshly brewed coffee, BreadShop is built on passion,
            craftsmanship, and community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#f5e6d3]">Our Journey</h2>
          <p className="mt-4 text-[#e2c9a6] leading-relaxed">
            BreadShop started as a small neighborhood bakery in 2015 with one oven, two baristas, and a dream:
            to create bread and coffee worth waking up for. Over the years, we’ve grown into a bustling café,
            but our heart remains the same—serving handmade loaves, pastries, and the perfect cup of coffee.
          </p>
          <p className="mt-4 text-[#e2c9a6] leading-relaxed">
            We believe in sourcing the finest ingredients, supporting local farmers, and crafting everything with
            patience and love. Every sourdough crust, every latte art heart, carries a piece of our dedication.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-xl overflow-hidden ring-1 ring-white/10">
          <Image
            src={FreshBread}
            alt="Fresh bread on display"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#f5e6d3] text-center">Our Mission & Values</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Quality First", desc: "We bake in small batches using the best ingredients for the freshest taste." },
            { title: "Community", desc: "Our bakery is a gathering place where neighbors meet and share." },
            { title: "Sustainability", desc: "We source locally and minimize waste to protect our planet." },
          ].map((v) => (
            <div key={v.title} className="bg-[#2a1e14] rounded-xl border border-white/10 p-6 text-center">
              <h3 className="text-lg font-semibold text-[#d9a066]">{v.title}</h3>
              <p className="mt-2 text-[#e2c9a6] text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-[#f5e6d3] text-center">Meet Our Team</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Emma Dough", role: "Head Baker", img: user1 },
            { name: "Liam Roast", role: "Lead Barista", img: user2 },
            { name: "Sophia Crumb", role: "Pastry Chef", img: user3 },
          ].map((t) => (
            <div key={t.name} className="bg-[#2a1e14] rounded-xl border border-white/10 overflow-hidden">
              <div className="relative w-full h-64">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#f5e6d3]">{t.name}</h3>
                <p className="text-[#d9a066] text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 text-center">
        <h2 className="text-2xl font-bold text-[#f5e6d3]">Come Visit Us</h2>
        <p className="mt-2 text-[#e2c9a6]">
          Taste the difference fresh baking and crafted coffee can make.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 rounded-lg
                     bg-gradient-to-r from-[#d9a066] to-[#8b4513]
                     text-white font-bold hover:from-[#e2ac6f] hover:to-[#9c5930]
                     hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                     transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
