import React from "react";

interface Props {
  genre: string[];
}

const SingleBookGenre = ({ genre }: Props) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      {genre.map((item) => (
        <div
          className="rounded-full bg-purple-300 px-2 text-purple-100"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SingleBookGenre;
