"use client";
import { createSelector } from "@reduxjs/toolkit";
import { dummy_breads } from "@/data/dummy-bread";
import type { RootState } from "./store";

export const selectFilterState = (s: RootState) => s.productFilter;

export const selectVisibleProducts = createSelector(
  [selectFilterState],
  ({ query, selectedCategories, sort }) => {
    let arr =
      selectedCategories.length > 0
        ? dummy_breads.filter(b => selectedCategories.includes(b.category))
        : dummy_breads;

    const q = query.trim().toLowerCase();
    if (q) {
      arr = arr.filter(b =>
        [b.name, b.description, b.category, ...(b.tags ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    switch (sort) {
      case "low":    return [...arr].sort((a,b) => a.price - b.price);
      case "high":   return [...arr].sort((a,b) => b.price - a.price);
      case "rating": return [...arr].sort((a,b) => b.rating - a.rating);
      default:       return arr;
    }
  }
);
