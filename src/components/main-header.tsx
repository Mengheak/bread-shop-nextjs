"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavMenu: { link: string; label: string }[] = [
    { link: "/", label: "Home" },
    { link: "/products", label: "Product" },
    { link: "/about", label: "About" },
    { link: "/contact", label: "Contact" },
  ];

  const cartCount = 2;
  const favCount = 5;

  return (
    <header className="px-6 md:px-[10%] py-4">
      <nav className="flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-4">
          <div className="size-12 md:size-16 rounded-full bg-amber-500 shadow-md shadow-amber-900/30" />
          <span className="font-bold text-lg md:text-xl uppercase tracking-wider text-[#f5e6d3]">
            Breadshop
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          {NavMenu.map((na) => {
            const isActive = pathname === na.link;
            return (
              <li key={na.link}>
                <Link
                  href={na.link}
                  className={`text-base lg:text-lg tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#d9a066] font-semibold border-b-2 border-[#d9a066] pb-0.5"
                      : "text-[#f5e6d3]/90 hover:text-[#f5e6d3]"
                  }`}
                >
                  {na.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <span className="flex gap-1 lg:gap-3 max-md:hidden">
            <Link
              href="/favorites"
              aria-label="Favorites"
              className="relative p-2 rounded-full hover:bg-white/5 transition-all duration-200 hover:scale-105"
            >
              <HeartIcon className="w-6 h-6 text-[#f5e6d3] transition-colors duration-200" />
              {favCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-2 rounded-full hover:bg-white/5 transition-all duration-200 hover:scale-105"
            >
              <CartIcon className="w-6 h-6 text-[#f5e6d3] transition-colors duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-amber-500 text-black text-[10px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden ring-1 ring-white/10 hover:ring-white/25 transition-all duration-200 hover:scale-105"
              aria-label="Account"
            >
              <div className="w-full h-full bg-[#8b4513] grid place-items-center text-xs md:text-sm text-[#f5e6d3]">
                BK
              </div>
            </Link>
          </span>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-all duration-200 hover:scale-105"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <XIcon className="w-6 h-6 text-[#f5e6d3]" />
            ) : (
              <MenuIcon className="w-6 h-6 text-[#f5e6d3]" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <span className="flex items-center gap-3 justify-end translate-y-2">
        <Link
            href="/favorites"
            aria-label="Favorites"
            className="relative p-2 rounded-full hover:bg-white/5 transition-all duration-200 hover:scale-105"
          >
            <HeartIcon className="w-6 h-6 text-[#f5e6d3] transition-colors duration-200" />
            {favCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center">
                {favCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative p-2 rounded-full hover:bg-white/5 transition-all duration-200 hover:scale-105"
          >
            <CartIcon className="w-6 h-6 text-[#f5e6d3] transition-colors duration-200" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-amber-500 text-black text-[10px] font-semibold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile avatar */}
          <Link
            href="/account"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden ring-1 ring-white/10 hover:ring-white/25 transition-all duration-200 hover:scale-105"
            aria-label="Account"
          >
            <div className="w-full h-full bg-[#8b4513] grid place-items-center text-xs md:text-sm text-[#f5e6d3]">
              BK
            </div>
          </Link>
      </span>
        <div className="mt-3 rounded-xl border border-white/10 bg-black/25 backdrop-blur-sm">
          <ul className="flex flex-col">
            {NavMenu.map((na) => {
              const isActive = pathname === na.link;
              return (
                <li key={na.link}>
                  <Link
                    href={na.link}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 transition-colors duration-200 ${
                      isActive
                        ? "text-[#d9a066] font-semibold bg-white/5"
                        : "text-[#f5e6d3]/90 hover:text-[#f5e6d3] hover:bg-white/5"
                    }`}
                  >
                    {na.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Icons ---------------- */
function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 3h2l1.6 9.2A2 2 0 0 0 8.6 14h7.7a2 2 0 0 0 2-1.7l1-6.3H6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="19" r="1.6" fill="currentColor" />
      <circle cx="17" cy="19" r="1.6" fill="currentColor" />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-6.5-4.2-9-7.8C1.3 10.6 2.1 7.2 5 6a5 5 0 0 1 5.8 1.3L12 8l1.2-0.7A5 5 0 0 1 19 6c2.8 1.2 3.7 4.6 2 7.2-2.5 3.6-9 7.8-9 7.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
