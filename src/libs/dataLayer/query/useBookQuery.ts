import type { BookSchema } from "@/libs/schema/book";

import { api } from "@/api/api";
import useSWR from "swr";

export const prefetchBookQuery = async (id: string): Promise<BookSchema> => {
  return api.get(`/books/${id}`).then((res) => res.data);
};

const bookQuery = async (url: string): Promise<BookSchema> => {
  return api.get(url).then((res) => res.data);
};

interface Props {
  fallbackData: BookSchema;
  id: string;
}

export const useBookQuery = ({ fallbackData, id }: Props) => {
  return useSWR(`/books/${id}`, bookQuery, {
    fallbackData,
  });
};
