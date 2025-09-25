import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Lang = "ru" | "uk";

interface LangState {
  current: Lang;
}

const initialState: LangState = {
  current: detectUserLang(),
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Lang>) => {
      state.current = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;

// 👇 додай сюди функцію (якщо не винесеш в utils)
function detectUserLang(): Lang {
  if (typeof navigator !== "undefined") {
    const userLang = navigator.language.toLowerCase();
    if (userLang.startsWith("uk")) return "uk";
    if (userLang.startsWith("ru")) return "ru";
  }
  return "ru";
}

