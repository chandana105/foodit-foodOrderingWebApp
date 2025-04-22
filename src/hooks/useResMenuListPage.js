import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearRestaurant, setRestaurant } from "../store/restaurantSlice";

const useResMenuListPage = ({ resId, resInfo }) => {
  const dispatch = useDispatch();

  const [openCategories, setOpenCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (resInfo) {
      loadCategories(1);
    }
  }, [resInfo]);

  useEffect(() => {
    // Clear the restaurant details when component mounts
    dispatch(clearRestaurant());

    // Set the new restaurant details
    if (resInfo) {
      dispatch(setRestaurant(resInfo.cards[2].card.card.info));
    }

    // Cleanup when component unmounts or resId changes
    return () => {
      dispatch(clearRestaurant());
    };
  }, [resId, resInfo, dispatch]);

  const loadCategories = (page) => {
    const allCategories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (category) =>
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    
    const newCategories = allCategories.slice((page - 1) * 10, page * 10);
    
    if (newCategories.length > 0) {
      setCategories((prev) => [...prev, ...newCategories]);
      setOpenCategories((prev) => [
        ...prev,
        ...new Array(newCategories.length).fill(true),
      ]);
    } else {
      setHasMore(false);
    }
  };


  const handleToggle = (index) => {
    setOpenCategories((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const fetchMoreData = () => {
    setPage((prevPage) => {
      loadCategories(prevPage + 1);
      return prevPage + 1;
    });
  };

  return {
    openCategories,
    categories,
    hasMore,
    handleToggle,
    fetchMoreData,
  };
};

export default useResMenuListPage;
