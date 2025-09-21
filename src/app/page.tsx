"use client";
import css from './page.module.css';
import Hero from '@/components/Hero/Hero';
import About from '../components/About/About';
import CategoryPost from '../components/CategoryPost/CategoryPost';
import React, { useEffect } from "react";
import { fetchPosts } from "../redux/operations";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../redux/selector";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
//import type { Post } from "../types/post";




export default function Home() {
   const dispatch = useAppDispatch();

  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectPostsLoading);
  const error = useAppSelector(selectPostsError);

  useEffect(() => {
    dispatch(fetchPosts({ lang: "ru" }));
  }, [dispatch]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  console.log("posts:", posts);

  return (
    <>
      <Hero posts={posts}/>
      <About />
      <CategoryPost posts={posts}/>
    </>
  );
}
