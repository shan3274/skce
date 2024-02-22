import React from "react";

export const Skeleton = ({ data }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{data?.name}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {data?.description}
      </p>
    </div>
  );
};
