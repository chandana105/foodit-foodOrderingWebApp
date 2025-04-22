import { useState } from "react";
import useRestaurantsList from "./useRestaurantsList";

const useHomePage = (myResList) => {
  const { setFilteredResList, filteredResList } = useRestaurantsList();
  const [isFilterOn, setIsFilterOn] = useState(false);

  const handleSearchFilter = (text) => {
    if (text) {
      setIsFilterOn(false);
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
    filteredResList,
    handleCloseFilter,
    handleSearchFilter,
    handleFilterTopRatedRestaurants,
  };
};

export default useHomePage;
