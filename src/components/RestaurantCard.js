import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resData.info;

  return (
    <div
      className="mb-6 p-1 py-2  w-64 h-80 shadow-xl transition-all duration-700 ease-in-out transform hover:-translate-z-10 hover:scale-90 hover:z-0 hover:w-[260px] hover:mx-2 rounded-2xl"
      data-testid="resCard"
    >
      <div>
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="rest-img"
          className="rounded-2xl bg-cover w-full h-48"
        />
      </div>
      <div className="py-2 px-2">
        <h4 className="font-semibold text-base">{name}</h4>
        <div className="flex items-center font-semibold text-sm">
          <div className="flex items-center gap-1">
            <FaStar size={15} color="#16a34a" />
            {avgRating}
          </div>
          <LuDot size={25} color="#000" className="-ml-1" />
          <h4 className="-ml-1">{sla.slaString}</h4>
        </div>
        <h4 className="text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600">{areaName}</h4>
      </div>
    </div>
  );
};

// HOC

// input = RestaurantCard => RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-green-600 text-white rounded-lg -m-2 px-4 py-1 z-50">
          Veg
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
