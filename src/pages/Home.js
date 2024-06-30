import React from "react";
import RestaurantCard, {
  withVegLabel,
} from "../components/Home/RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantsList from "../hooks/useRestaurantsList";
import SearchBar from "../components/Home/SearchBar";
import { IoMdCloseCircle } from "react-icons/io";
import HomeShimmerUI from "../components/Home/HomeShimmerUI";
import useHomePage from "../hooks/useHomePage";

const Home = () => {
  const { myResList } = useRestaurantsList();
  const {
    isFilterOn,
    filteredResList,
    handleCloseFilter,
    handleSearchFilter,
    handleFilterTopRatedRestaurants,
  } = useHomePage(myResList);

  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  return myResList?.length === 0 ? (
    <HomeShimmerUI />
  ) : (
    <div className="w-9/12 m-auto min-h-screen flex flex-col">
      <div className="flex m-4 p-4 items-center justify-center mt-24 flex-col sm:flex-row">
        <SearchBar handleFilter={handleSearchFilter} />
        <div className="bg-orange-600 rounded-lg p-4 flex justify-between items-center mt-4 sm:mt-0">
          <button
            onClick={handleFilterTopRatedRestaurants}
            className="text-white"
          >
            Top Rated Restaurants
          </button>
          {isFilterOn && (
            <button className="ml-3" onClick={handleCloseFilter}>
              <IoMdCloseCircle size={20} color="#fff" />
            </button>
          )}
        </div>
      </div>
      {filteredResList?.length ? (
        <div className="flex flex-wrap justify-around m-1">
          {filteredResList?.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardWithVeg resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-48 p-4 mx-auto">
          <h1 className="text-2xl text-black">No Restaurants</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
