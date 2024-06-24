import { useState } from "react";
import useRestaurantsList from "./useRestaurantsList";

const useHomePage = (myResList) => {
  const { setFilteredResList } = useRestaurantsList();
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
  return {
    isFilterOn,
    handleCloseFilter,
    handleFilter,
    handleFilterTopRatedRestaurants,
  };
};

export default useHomePage;
