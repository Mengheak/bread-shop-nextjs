// app/contact/page.tsx
"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    type: "order",
    message: "",
    subscribe: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as any;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 900));
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", type: "order", message: "", subscribe: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="px-5 md:px-[10%] pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a1e14]/60 backdrop-blur-sm mt-6">
        <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-24">
          <path d="M0,0 C300,80 900,0 1200,60 L1200,0 Z" fill="#3e2723" fillOpacity="0.9" />
        </svg>
        <div className="relative z-10 px-6 md:px-10 py-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d9a066]">Say Hello</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold bg-[linear-gradient(135deg,#d9a066_0%,#8b4513_100%)] bg-clip-text text-transparent">
            Contact BreadShop
          </h1>
          <p className="mt-3 max-w-2xl text-[#f5e6d3]/80">
            Questions, custom orders, wholesale, or coffee pairings—drop us a line. We’re happy to help.
          </p>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="bg-[#2a1e14] rounded-2xl border border-white/10 p-6 flex flex-col gap-5">
          <h2 className="text-xl font-bold text-[#f5e6d3]">Contact Details</h2>
          <div className="space-y-3 text-[#f5e6d3]/85">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#d9a066]" /> 123 Coffee St, Bakery City</p>
            <p className="flex items-center gap-3"><FaPhone className="text-[#d9a066]" /> +1 (555) 123‑456</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-[#d9a066]" /> hello@breadshop.com</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-[#f5e6d3]">Hours</h3>
            <ul className="mt-2 text-[#e2c9a6] text-sm space-y-1">
              <li>Mon–Fri: 7:00 AM – 6:00 PM</li>
              <li>Sat–Sun: 8:00 AM – 5:00 PM</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-[#f5e6d3]">Follow Us</h3>
            <div className="mt-2 flex items-center gap-4 text-lg text-[#f5e6d3]">
              <a href="#" className="hover:text-[#d9a066] transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#d9a066] transition"><FaInstagram /></a>
              <a href="#" className="hover:text-[#d9a066] transition"><FaTwitter /></a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10">
            <iframe
              title="BreadShop location"
              src="https://www.google.com/maps?q=Bakery%20City&output=embed"
              className="w-full h-48"
              loading="lazy"
            />
          </div>
        </aside>

        <section className="lg:col-span-2 bg-[#2a1e14] rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-[#f5e6d3]">Send us a message</h2>

          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm text-[#e2c9a6] mb-1" htmlFor="name">Name</label>
              <input
                id="name" name="name" value={form.name} onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-[#1a120b]/60 px-3 py-2
                           text-[#f5e6d3] placeholder:text-[#f5e6d3]/50 focus:outline-none
                           focus:ring-2 focus:ring-[#d9a066]/50 transition"
                placeholder="Jane Dough"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm text-[#e2c9a6] mb-1" htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" value={form.email} onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-[#1a120b]/60 px-3 py-2
                           text-[#f5e6d3] placeholder:text-[#f5e6d3]/50 focus:outline-none
                           focus:ring-2 focus:ring-[#d9a066]/50 transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm text-[#e2c9a6] mb-1" htmlFor="type">Inquiry Type</label>
              <select
                id="type" name="type" value={form.type} onChange={onChange}
                className="w-full appearance-none rounded-lg border border-[#d9a066]/30 
                           bg-[#1a120b]/70 px-3 py-2 pr-10 text-[#f5e6d3] font-medium
                           focus:outline-none focus:ring-2 focus:ring-[#d9a066]/50 focus:border-[#d9a066]
                           hover:border-[#d9a066]/50 transition"
              >
                <option value="order">Order question</option>
                <option value="custom">Custom cake / bread</option>
                <option value="wholesale">Wholesale / partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm text-[#e2c9a6] mb-1" htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" value={form.subject} onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-[#1a120b]/60 px-3 py-2
                           text-[#f5e6d3] placeholder:text-[#f5e6d3]/50 focus:outline-none
                           focus:ring-2 focus:ring-[#d9a066]/50 transition"
                placeholder="e.g., Custom sourdough order"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-[#e2c9a6] mb-1" htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows={5} value={form.message} onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-[#1a120b]/60 px-3 py-2
                           text-[#f5e6d3] placeholder:text-[#f5e6d3]/50 focus:outline-none
                           focus:ring-2 focus:ring-[#d9a066]/50 transition resize-y"
                placeholder="Tell us about your request…"
              />
            </div>

            <label className="md:col-span-2 inline-flex items-center gap-2 text-[#e2c9a6] text-sm">
              <input
                type="checkbox" name="subscribe" checked={form.subscribe} onChange={onChange}
                className="size-4 rounded border-white/10 bg-[#1a120b]/60 text-[#d9a066] focus:ring-[#d9a066]"
              />
              Subscribe to weekly specials & new brews
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-block px-5 py-2.5 rounded-lg
                           bg-gradient-to-r from-[#d9a066] to-[#8b4513]
                           text-white font-bold
                           hover:from-[#e2ac6f] hover:to-[#9c5930]
                           hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                           active:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                           transition-all duration-300 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "sent" && (
                <span className="ml-3 text-emerald-400 text-sm">Thanks! We’ll get back to you soon.</span>
              )}
              {status === "error" && (
                <span className="ml-3 text-rose-400 text-sm">Please fill in name, email, and message.</span>
              )}
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
