import { useEffect, useRef, useState } from "react";

const useRestaurantCategory = (category) => {
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
  return { items, scrollableTarget, categoryRef, hasMore, handleScroll, fetchMoreData };
};

export default useRestaurantCategory;
