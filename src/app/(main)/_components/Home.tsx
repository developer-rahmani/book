"use client";

import type { BookSchema } from "@/libs/schema/book";

import { useBooksQuery } from "@/libs/dataLayer/query/useBooksQuery";
import React from "react";

import BookCard from "./BookCard";

interface Props {
  fallbackData: BookSchema[];
}

const Home = ({ fallbackData }: Props) => {
  const { data } = useBooksQuery({ fallbackData });

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.slice(0, 9).map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Home;
