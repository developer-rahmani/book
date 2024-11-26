import type { BookSchema } from "@/libs/schema/book";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

interface Props {
  book: BookSchema;
}

const BookCard = ({ book }: Props) => {
  return (
    <Link
      className="flex flex-col gap-4 rounded-lg bg-primary-300 p-4 transition-[background-color] duration-200 ease-linear hover:bg-primary-200"
      href={`/book/${book.id}`}
    >
      <div className="relative aspect-video w-full">
        <Image
          fill
          alt={book.title}
          blurDataURL={book.cover_image}
          className="rounded-lg"
          loader={(url) => url.src}
          objectFit="cover"
          placeholder="blur"
          src={book.cover_image}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-neutral-dark-100">{book.title}</p>
        <p className="text-neutral-dark-200">{book.description}</p>
      </div>
      <div className="mt-auto flex items-center gap-1 text-sm">
        {book.genre.map((genre) => (
          <div
            className="rounded-full bg-purple-300 px-2 text-purple-100"
            key={genre}
          >
            {genre}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BookCard;
