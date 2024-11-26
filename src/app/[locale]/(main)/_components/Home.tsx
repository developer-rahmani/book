"use client";

import type { BookSchema } from "@/libs/schema/book";

import { useBooksQuery } from "@/libs/dataLayer/query/useBooksQuery";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

import BookCard from "./BookCard";
import HomeSearchInput from "./HomeSearchInput";

interface Props {
  fallbackData: BookSchema[];
}

const Home = ({ fallbackData }: Props) => {
  const searchParams = useSearchParams();
  const t = useTranslations("home");

  const { data } = useBooksQuery({
    fallbackData,
    search: searchParams.get("search") ?? "",
  });

  return (
    <div className="flex flex-col gap-6">
      <HomeSearchInput />
      {data.length === 0 ? (
        <div className="flex justify-center">
          <p className="text-g-200">{t("emptyMsg")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 9).map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
