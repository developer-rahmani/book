import type { BookSchema } from "@/libs/schema/book";

import { api } from "@/api/api";
import useSWR from "swr";

export const prefetchBooksQuery = async (
  search: string,
): Promise<BookSchema[]> => {
  return api
    .get("/books", {
      params: {
        ...(search && { search }),
      },
    })
    .then((res) => res.data);
};

interface AxiosProps {
  url: string;
  searchQuery: string;
}

const booksQuery = async ({
  url,
  searchQuery,
}: AxiosProps): Promise<BookSchema[]> => {
  return api
    .get(url, {
      params: {
        ...(searchQuery && {
          search: searchQuery,
        }),
      },
    })
    .then((res) => res.data);
};

interface Props {
  fallbackData: BookSchema[];
  search: string;
}

export const useBooksQuery = ({ fallbackData, search }: Props) => {
  return useSWR(
    ["/books", search],
    ([url, searchQuery]) => booksQuery({ url, searchQuery }),
    {
      fallbackData,
    },
  );
};
