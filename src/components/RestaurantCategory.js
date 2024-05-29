import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  category,
  showMenuItems,
  setActiveIndex,
  dummy,
}) => {
  const handleClick = () => {
    setActiveIndex(); //2. called

    console.log("its opened", { showMenuItems }); // 5.
  };

  return (
    <div className=" w-full mb-2 rounded-md m-4 p-4">
      {/* accordia header */}
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick} // 1.
        // onClick={setActiveIndex}
      >
        <div className="font-bold text-lg">
          {category.title} ({category.itemCards.length})
        </div>
        <div className="text-lg">{showMenuItems ? "⬆️" : "⬇️"} </div>
      </div>
      {/* accordian body */}

      {showMenuItems ? (
        <ItemList itemCards={category?.itemCards} dummy={dummy} />
      ) : (
        <div className="bg-gray-100 w-full h-4 mt-6"> </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
