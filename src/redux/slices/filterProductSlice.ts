import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortKey = "popular" | "low" | "high" | "rating";

export interface FilterState {
  query: string;
  selectedCategories: string[];
  sort: SortKey;
}

const initialState: FilterState = {
  query: "",
  selectedCategories: [],
  sort: "popular",
};

const filterProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    toggleCategory(state, action: PayloadAction<string>) {
      state.selectedCategories = state.selectedCategories.includes(
        action.payload
      )
        ? state.selectedCategories.filter((x) => x != action.payload)
        : [...state.selectedCategories, action.payload];
    },
    clearCategories(state) {
      state.selectedCategories = [];
    },
    setSort(state, action: PayloadAction<SortKey>) {
      state.sort = action.payload;
    },
  },
});



export const { setQuery, toggleCategory, clearCategories, setSort } =
  filterProductSlice.actions;
export default filterProductSlice.reducer;