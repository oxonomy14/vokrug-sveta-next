import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./operations";
import type { Pagination, Post } from "../types/post";

interface PostsState {
  byCategory: {
    [key: string]: {
      items: Post[];
      pagination: Pagination;
      loading: boolean;
      error: string | null;
    };
  };
}

const initialState: PostsState = {
  byCategory: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        const category = action.meta.arg.category ?? "all";
        state.byCategory[category] = {
          items: [],
          pagination: { limit: 0, offset: 0, total: 0 },
          loading: true,
          error: null,
        };
      })
   .addCase(fetchPosts.fulfilled, (state, action) => {
  const { category, data, pagination } = action.payload;
  const cat = category ?? "all";

  if (state.byCategory[cat]) {
    // Додаємо до існуючих постів
    state.byCategory[cat].items.push(...data);
    state.byCategory[cat].pagination = pagination;
    state.byCategory[cat].loading = false;
    state.byCategory[cat].error = null;
  } else {
    // Якщо категорія вперше
    state.byCategory[cat] = {
      items: data,
      pagination,
      loading: false,
      error: null,
    };
  }
})
      .addCase(fetchPosts.rejected, (state, action) => {
        const category = action.meta.arg.category ?? "all";
        state.byCategory[category] = {
          items: [],
          pagination: { limit: 0, offset: 0, total: 0 },
          loading: false,
          error: action.error.message || "Error fetching posts",
        };
      });

  },
});
export default postsSlice.reducer;
