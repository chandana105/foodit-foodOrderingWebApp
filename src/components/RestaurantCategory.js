import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const RestaurantCategory = ({ category, showMenuItems, handleToggle }) => {
  const initialItems = category.itemCards.slice(0, 10);
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(category.itemCards.length > 10);

  useEffect(() => {
    if (category.itemCards.length <= 10) {
      setHasMore(false);
    }
  }, [category.itemCards.length]);

  const fetchMoreData = () => {
    if (!hasMore) return;

    const newItems = category.itemCards.slice(page * 10, (page + 1) * 10);

    if (newItems.length === 0) {
      // If no new items, set hasMore to false immediately
      setHasMore(false);
      return;
    }

    setItems((prev) => [...prev, ...newItems]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full mb-2 rounded-md m-4 p-4">
      {/* Accordion header */}
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleToggle}
      >
        <div className="font-bold text-xl">
          {category.title} ({category.itemCards.length})
        </div>
        <div className="">
          {showMenuItems ? (
            <LuChevronUp size={25} />
          ) : (
            <LuChevronDown size={25} />
          )}
        </div>
      </div>
      {/* Accordion body */}
      {showMenuItems ? (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex items-center justify-center mt-2">
              <BeatLoader color="#EA580C" />
            </div>
          }
          endMessage={<></>}
        >
          <ItemList itemCards={items} />
        </InfiniteScroll>
      ) : (
        <div className="bg-gray-100 w-full h-4 mt-6"></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
