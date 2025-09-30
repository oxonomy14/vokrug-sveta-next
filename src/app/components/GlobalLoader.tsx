"use client";
import { useIsFetching } from "@tanstack/react-query";
import Loader from "@/app/components/Loader/Loader";

export default function GlobalLoader() {
  const isFetching = useIsFetching();

  return isFetching ? <Loader loading={true} /> : null;
}
