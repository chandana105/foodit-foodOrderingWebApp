import Shimmer from "../components/Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantMenu/RestaurantCategory";
import RestaurantDetailsHeader from "../components/RestaurantMenu/RestaurantDetailsHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { clearRestaurant, setRestaurant } from "../store/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
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

  if (resInfo === null) {
    return <Shimmer />;
  }

  const fetchMoreData = () => {
    setPage((prevPage) => {
      loadCategories(prevPage + 1);
      return prevPage + 1;
    });
  };

  return (
    <div className="w-6/12 m-auto flex flex-col items-center p-4 min-h-screen mt-24">
      <RestaurantDetailsHeader
        restaurantInfo={resInfo?.cards[2]?.card?.card?.info}
      />
      <div className="w-full">
        <InfiniteScroll
          dataLength={categories.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex items-center justify-center mt-2">
              <BeatLoader color="#EA580C" />
            </div>
          }
          endMessage={<></>}
        >
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              category={category?.card?.card}
              showMenuItems={openCategories[index]}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default RestaurantMenu;
