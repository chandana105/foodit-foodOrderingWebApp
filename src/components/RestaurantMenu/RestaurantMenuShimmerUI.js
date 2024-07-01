import React from "react";

const RestaurantMenuShimmerUI = () => {
  return (
    <div className="w-6/12 m-auto flex flex-col items-center p-4 min-h-screen mt-24">
      {/* resdetailHeader */}
      <div className="w-[97%] m-4 p-4 flex justify-between items-center rounded-xl border-[0.5px] border-slate-200 shadow-sm bg-white ">
        <div className="w-full h-20 bg-gray-300"></div>
      </div>
      {/* res category menu list */}
      <div className="w-full">
        <div
          className="w-full mb-2 rounded-md  p-4 "
          style={{
            maxHeight: "1300px",
            height: "auto",
            overflowY: "auto",
          }}
        >
          {/* res category title */}
          <div className="w-full h-10 bg-gray-300"></div>
          {/* res menul list array */}
          <div
            style={{
              height: "auto",
              overflowY: "auto",
            }}
          >
            {Array.from({ length: 3 }).map((item, i) => (
              <div
                key={i}
                className="py-10 border-b-2 border-gray-100 flex justify-between relative"
              >
                <div className="w-full h-28 bg-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmerUI;
