import RestaurantCard, {
  withVegLabel,
} from "../components/Home/RestaurantCard";
import { useState } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";
import SearchBar from "../components/Home/SearchBar";
import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
  const { myResList, filteredResList, setFilteredResList } =
    useRestaurantsList();
  const [isFilterOn, setIsFilterOn] = useState(false);

  const handleFilter = (text) => {
    if (text) {
      const filteredRestaurants = myResList.filter((res) =>
        res.info.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredResList(filteredRestaurants);
    } else {
      setFilteredResList(myResList);
    }
  };

  const handleFilterTopRatedRestaurants = () => {
    setIsFilterOn(true);
    const filteredList = myResList.filter((list) => list.info.avgRating > 4.3);
    setFilteredResList(filteredList);
  };

  const handleCloseFilter = () => {
    setIsFilterOn(false);
    setFilteredResList(myResList);
  };

  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  return myResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-9/12 m-auto min-h-screen flex flex-col">
      <div className="flex m-4 p-4  items-center justify-center mt-24 ">
        <SearchBar handleFilter={handleFilter} />
        <div className="bg-orange-600  rounded-lg p-4 flex justify-between items-center  ">
          <button
            onClick={handleFilterTopRatedRestaurants}
            className="text-white"
          >
            Top Rated restaurants
          </button>
          {isFilterOn && (
            <button className="ml-3" onClick={handleCloseFilter}>
              <IoMdCloseCircle size={20} color="#fff" />
            </button>
          )}
        </div>
      </div>
      {filteredResList?.length ? (
        <div className="flex flex-wrap justify-around m-1  ">
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
