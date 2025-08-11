import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function MainFooter() {
  return (
    <footer className="bg-[#2a1e14] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#d9a066]">BreadShop</h2>
          <p className="mt-2 text-sm text-white/70">
            Freshly baked bread and perfectly brewed coffee delivered daily.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#d9a066] transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#d9a066] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#d9a066] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#d9a066] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: hello@breadshop.com</li>
            <li>Phone: +855 555 123 456</li>
            <li>Address: 123 Coffee St, Bakery City</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-[#d9a066] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#d9a066] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#d9a066] transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} BreadShop. All rights reserved.
      </div>
    </footer>
  );
}
