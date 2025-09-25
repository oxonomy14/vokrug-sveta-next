import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import langReducer from "./langSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
     lang: langReducer,
  },
});

// Типи для всього Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;