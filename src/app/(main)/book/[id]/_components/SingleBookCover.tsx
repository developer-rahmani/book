import Image from "next/image";
import React from "react";

interface Props {
  cover: string;
  title: string;
}

const SingleBookCover = ({ cover, title }: Props) => {
  return (
    <div className="relative aspect-video w-full md:w-[500px]">
      <Image
        fill
        alt={title}
        blurDataURL={cover}
        className="rounded-lg"
        loader={(url) => url.src}
        objectFit="cover"
        placeholder="blur"
        src={cover}
      />
    </div>
  );
};

export default SingleBookCover;
