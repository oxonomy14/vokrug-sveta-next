import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { FetchPostsArgs, FetchPostsResponse } from "../types/api";
import type { Post } from "../types/post";



export const fetchPosts = createAsyncThunk<
  FetchPostsResponse,
  FetchPostsArgs
>(
  "posts/fetchPosts",
  async ({ lang = "ru", limit = 6, offset = 0, category, sort }: FetchPostsArgs) => {
    const response = await axios.get("http://localhost:5001/posts", {
      params: { 
        lang, 
        limit, 
        offset, 
        ...(category ? { category } : {}),
        ...(sort ? { sortField: sort.field, sortOrder: sort.order } : {})
      },
    });

    return {
      category: category ?? "all",
      data: response.data.data, 
      pagination: {
        limit,
        offset,
        total: response.data.total,
      },
    };
  }
);