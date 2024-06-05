import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantDetailsHeader from "./RestaurantDetailsHeader";
import InfiniteScroll from "react-infinite-scroll-component";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [openCategories, setOpenCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (resInfo) {
      loadCategories(1);
    }
  }, [resInfo]);

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
      <InfiniteScroll
        dataLength={categories.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
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
  );
};

export default RestaurantMenu;
