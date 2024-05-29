import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div
      className="m-4 p-4 bg-slate-100 w-[250px]  shadow-xl transition-all duration-700 ease hover:w-[270px] rounded-2xl  "
      data-testid="resCard"
    >
      <div className="h-2/6">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="rest-img"
          className=" rounded-2xl bg-cover w-full  "
        />
      </div>
      <div className="py-4 h-4/6 ">
        <h4 className="font-bold py-2 text-lg">{name}</h4>
        <h4>{avgRating} star ratings</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
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
        <label className="absolute bg-green-600 text-white rounded-lg m-1  px-4 py-1">
          Veg
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
