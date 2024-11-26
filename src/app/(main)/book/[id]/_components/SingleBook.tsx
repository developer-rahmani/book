"use client";

import type { BookSchema } from "@/libs/schema/book";

import { useBookQuery } from "@/libs/dataLayer/query/useBookQuery";
import React from "react";

import SingleBookCover from "./SingleBookCover";
import SingleBookDescription from "./SingleBookDescription";
import SingleBookGenre from "./SingleBookGenre";
import SingleBookTitle from "./SingleBookTitle";

interface Props {
  fallbackData: BookSchema;
  id: string;
}

const SingleBook = ({ fallbackData, id }: Props) => {
  const { data } = useBookQuery({ fallbackData, id });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <SingleBookCover cover={data.cover_image} title={data.title} />
        <SingleBookTitle title={data.title} />
      </div>

      <SingleBookGenre genre={data.genre} />
      <SingleBookDescription description={data.description} />
    </div>
  );
};

export default SingleBook;
