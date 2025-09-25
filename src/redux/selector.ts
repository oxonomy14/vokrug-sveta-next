import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';




export const selectPostsByCategory = (state: RootState, category: string) =>
  state.posts.byCategory[category] ?? {
    items: [],
    loading: false,
    error: null,
    pagination: { limit: 0, offset: 0, total: 0 },
  };



// Мемоизированный селектор
export const makeSelectPostsByCategory = (category: string) =>
  createSelector(
    [(state: RootState) => state.posts.byCategory[category]],
    (categoryData) => ({
      items: categoryData?.items ?? [],
      pagination: categoryData?.pagination ?? { limit: 0, offset: 0, total: 0 },
      loading: categoryData?.loading ?? false,
      error: categoryData?.error ?? null,
    })
  );


