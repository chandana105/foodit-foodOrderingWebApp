import React from "react";
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const RestaurantDetailsHeader = ({ restaurantInfo }) => {
  const {
    name,
    cuisines,
    sla,
    areaName,
    avgRating,
    avgRatingString,
    totalRatingsString,
  } = restaurantInfo;

  return (
    <div className="w-full m-4 px-2 py-4 flex justify-between items-center rounded-xl border-[0.5px] border-slate-200 shadow-sm bg-white ">
      {/* description */}
      <div className="px-2  flex-col">
        <h1 className="font-bold text-lg text-black">{name}</h1>
        <div className="flex items-center">
          <h2 className="font-semibold text-black text-sm">{sla.slaString}</h2>
          <LuDot size={25} color="#000" className="-ml-1" />

          <h2 className="font-semibold text-black text-sm">{areaName}</h2>
        </div>
        <h2 className="font-medium text-gray-500 text-sm">
          {cuisines.join(", ")}
        </h2>
      </div>
      {/* rating */}
      <div className=" px-1  ">
        <div className="flex items-center ">
          {avgRating ? (
            <div className="flex items-center  bg-green-800 p-1 px-3 rounded-lg gap-1">
              <FaStar size={15} color="#fff" />

              <h2 className="font-bold text-white ml-1 text-sm  ">
                {avgRating}
              </h2>
            </div>
          ) : (
            <div className="flex items-center bg-yellow-300 p-1 px-2 rounded-lg">
              {/* <IconLabel name="label-important" size={25} color="#fa0" /> */}
              <h2 className="font-bold text-black ml-1 h2-sm">
                {avgRatingString}
              </h2>
            </div>
          )}
        </div>
        <h2 className="text-xs text-gray-500 text-center mt-1">{totalRatingsString}</h2>
      </div>
    </div>
  );
};

export default RestaurantDetailsHeader;
