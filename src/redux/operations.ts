import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { FetchPostsArgs, FetchPostsResponse } from "../types/api";

export const fetchPosts = createAsyncThunk<
  FetchPostsResponse, // 
  FetchPostsArgs      // 
>(
  "posts/fetchPosts",
  async ({ lang = "ru", limit = 10, offset = 0 }: FetchPostsArgs) => {
    const res = await axios.get<FetchPostsResponse>("http://localhost:5001/posts", {
      params: { lang, limit, offset },
    });
    return res.data;
  }
);