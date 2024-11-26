import type { BookSchema } from "@/libs/schema/book";

import { api } from "@/api/api";
import useSWR from "swr";

export const prefetchBooksQuery = (): Promise<BookSchema[]> => {
  return api.get("/books").then((res) => res.data);
};

const booksQuery = (url: string): Promise<BookSchema[]> => {
  return api.get(url).then((res) => res.data);
};

interface Props {
  fallbackData: BookSchema[];
}

export const useBooksQuery = ({ fallbackData }: Props) => {
  return useSWR("/books", booksQuery, {
    fallbackData,
  });
};
