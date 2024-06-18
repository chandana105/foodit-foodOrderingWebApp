import React from "react";

const HomeShimmerUI = () => {
  return (
    <div className="m-auto w-10/12 mt-24 p-8">
      <div className="flex flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-[250px] p-4 m-6 h-[300px] bg-white shadow-md"
          >
            <div className="shimmer w-full h-44"></div>
            <div className="shimmer mt-4 h-6 w-3/4"></div>
            <div className="shimmer mt-2 h-4 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShimmerUI;
