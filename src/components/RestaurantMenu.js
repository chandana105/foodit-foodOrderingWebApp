import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantDetailsHeader from "./RestaurantDetailsHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [activeIndex, setActiveIndex] = useState(null);

  const dummy = "dummy data";

  const setActiveIndexProps = (index) => {
    return index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  }; // 4.


  if (resInfo === null) {
    return <Shimmer />;
  }

  const categoryList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div
      className="w-6/12 m-auto  flex flex-col items-center p-4  
      min-h-screen  mt-24
    "
    >
      <RestaurantDetailsHeader
        restaurantInfo={resInfo?.cards[2]?.card?.card?.info}
      />
      {/* categories */}
      {/* accordian for each category */}
      {categoryList.map((category, index) => (
        // controlled componenet (as parent is controlling it)

        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          showMenuItems={index === activeIndex}
          setActiveIndex={() => setActiveIndexProps(index)} //3.
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
