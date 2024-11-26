import React from "react";

interface Props {
  description: string;
}

const SingleBookDescription = ({ description }: Props) => {
  return (
    <div>
      <p className="text-lg text-neutral-dark-200">{description}</p>
    </div>
  );
};

export default SingleBookDescription;
