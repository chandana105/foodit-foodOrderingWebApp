import React from "react";
import MenuListItem from "./MenuListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import useRestaurantCategory from "../../hooks/useRestaurantCategory";
import { orangeIconColor } from "../../utils/constants";

const RestaurantCategory = ({ category, showMenuItems, handleToggle }) => {
  const {
    categoryRef,
    items,
    scrollableTarget,
    hasMore,
    handleScroll,
    fetchMoreData,
  } = useRestaurantCategory(category);

  return (
    <div
      className="w-full mb-2 rounded-md  p-4 "
      style={{
        maxHeight: "1300px",
        height: "auto",
        overflowY: "auto",
      }}
      ref={categoryRef}
      onScroll={handleScroll}
    >
      {/* Header */}
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

      {/* Scrollable Content */}
      {showMenuItems ? (
        <div
          style={{
            height: "auto",
            overflowY: "auto",
          }}
        >
          {scrollableTarget && (
            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <div className="flex items-center justify-center mt-2">
                  <BeatLoader color={`${orangeIconColor}`} />
                </div>
              }
              endMessage={<></>}
              scrollThreshold={0.9}
              scrollableTarget={scrollableTarget}
            >
              <div className="mt-6">
                {items.map((item) => (
                  <MenuListItem item={item} key={item.card.info.id} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      ) : (
        <div className="bg-gray-100 w-full h-4 mt-6"></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
