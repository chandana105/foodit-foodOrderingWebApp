import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import {  useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { myResList, filteredResList, setFilteredResList } =
    useRestaurantsList();

  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  return myResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-9/12 m-auto min-h-screen flex flex-col">
      <div className="flex m-4 p-4 items-center justify-center">
        <div className="flex mr-4">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-solid border-blue-300 mr-3 rounded-md "
          />
          <button
            onClick={() => {
              const filteredRestaurants = myResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredResList(filteredRestaurants);
            }}
            className="bg-blue-300 px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const topRatedRestaurantsList = myResList.filter(
              (list) => list.info.avgRating > 4.2
            );

            setFilteredResList(topRatedRestaurantsList);
          }}
          className="bg-blue-700 px-4 py-2 rounded-md text-white"
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-around m-10 ">
        {filteredResList?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {" "}
            {/* if the restaurant is veg add veg label to it */}
            {restaurant.info.veg ? (
              <RestaurantCardWithVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
