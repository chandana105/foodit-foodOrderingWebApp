import { useState, useEffect } from "react";

import { RESTAURANTS_LIST_URL } from "../utils/constants";

const useRestaurantsList = () => {
  const [myResList, setMyResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_LIST_URL);

    const json = await response.json();

    setMyResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { myResList, filteredResList, setFilteredResList };
};

export default useRestaurantsList;
