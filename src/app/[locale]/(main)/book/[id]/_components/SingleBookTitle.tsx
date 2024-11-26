import React from "react";

interface Props {
  title: string;
}

const SingleBookTitle = ({ title }: Props) => {
  return <p className="text-start text-xl text-neutral-dark-200">{title}</p>;
};

export default SingleBookTitle;
