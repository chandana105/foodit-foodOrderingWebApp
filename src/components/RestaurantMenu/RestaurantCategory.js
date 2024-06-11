import React, { useState, useEffect, useRef } from "react";
import ItemList from "./ItemList";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const RestaurantCategory = ({ category, showMenuItems, handleToggle }) => {
  const initialItems = category.itemCards.slice(0, 10);
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(category.itemCards.length > 10);
  const [scrollableTarget, setScrollableTarget] = useState(null);
  const [loading, setLoading] = useState(false);

  const categoryRef = useRef(null);

  useEffect(() => {
    if (category.itemCards.length <= 10) {
      setHasMore(false);
    }
  }, [category.itemCards.length]);

  useEffect(() => {
    if (categoryRef.current) {
      setScrollableTarget(categoryRef.current);
    }
  }, []);

  const fetchMoreData = () => {
    if (!hasMore || loading) return;

    setLoading(true);

    setTimeout(() => {
      const newItems = category.itemCards.slice(page * 10, (page + 1) * 10);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prevPage) => prevPage + 1);
      }

      setLoading(false);
    }, 1000); // 1 second delay to show loader
  };

  const handleScroll = () => {
    const categoryHeight = categoryRef.current.clientHeight;
    const scrollTop = categoryRef.current.scrollTop;
    const scrollHeight = categoryRef.current.scrollHeight;

    const scrollPercentage =
      (scrollTop / (scrollHeight - categoryHeight)) * 100;

    if (scrollPercentage >= 90) {
      fetchMoreData();
    }
  };

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
            // maxHeight: "calc(100% - 40px)",
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
                  <BeatLoader color="#EA580C" />
                </div>
              }
              endMessage={<></>}
              scrollThreshold={0.9}
              scrollableTarget={scrollableTarget}
            >
              <ItemList itemCards={items} />
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
