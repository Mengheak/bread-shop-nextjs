"use client";

import { TBread } from "@/data/dummy-bread";
import {
  setQuery,
  setSort,
  SortKey,
  toggleCategory,
} from "@/redux/slices/filterProductSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import Link from "next/link";
import { useState } from "react";

export default function ProductFiltering({
  categories,
  results,
}: {
  categories: string[];
  results: TBread[];
}) {
  const [focused, setFocused] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { query, selectedCategories, sort } = useAppSelector(
    (state) => state.productFilter
  );
  return (
    <section className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <li
            key={c}
            onClick={() => dispatch(toggleCategory(c))}
            className={`px-3 py-1 rounded-full border border-[#d9a066]/30 cursor-pointer text-[#f5e6d3]/90
                         transition-colors ${
                           selectedCategories?.includes(c) ? "bg-white/20" : ""
                         }`}
          >
            {c}
          </li>
        ))}
      </ul>

      <div className="flex w-full md:w-auto items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search breads…"
            className="w-full md:w-64 rounded-lg border border-white/10 bg-[#1a120b]/60
                    px-3 py-2 text-[#f5e6d3] placeholder:text-[#f5e6d3]/50
                    focus:outline-none focus:ring-2 focus:ring-[#d9a066]/50 transition"
            value={query}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />

          {focused && (
            <ul
              className="absolute z-50 bg-[#1a120b] w-full px-2.5 py-2 rounded-b-2xl overflow-hidden"
              onMouseDown={(e) => e.preventDefault()}
            >
              {results.length===0 ? (
                <p className="text-color py-1.4">No product matches your search</p>
              ) : (
                results.map((p) => (
                  <li
                    key={p.id}
                    className="text-[#f5e6d3] py-1.5 rounded-3xl cursor-pointer"
                  >
                    <Link href={`/products/${p.id}`}>{p.name}</Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        <select
          className="appearance-none rounded-lg border border-[#d9a066]/30 
             bg-[#1a120b]/70 px-4 py-2 pr-10 text-[#f5e6d3] font-medium
             shadow-sm transition-all duration-200
             focus:outline-none focus:ring-2 focus:ring-[#d9a066]/50 focus:border-[#d9a066]
             hover:border-[#d9a066]/50 cursor-pointer"
          defaultValue="popular"
          onChange={(e) => dispatch(setSort(e.target.value as SortKey))}
        >
          <option value="popular">Most popular</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
    </section>
  );
}
