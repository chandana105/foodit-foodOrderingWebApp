import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const useCartPage = (cartItems) => {
  const [items, setItems] = useState(cartItems.slice(0, 10));
  const [hasMore, setHasMore] = useState(cartItems.length > 10);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const fetchMoreData = () => {
    if (items.length >= cartItems.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...cartItems.slice(prevItems.length, prevItems.length + 10),
      ]);
    }, 500);
  };

  const handleConfirmDelete = () => {
    dispatch(clearCart());
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setItems(cartItems.slice(0, 10));
    setHasMore(cartItems.length > 10);
  }, [cartItems]);

  const handleClearCart = () => {
    setModalVisible(true);
  };

  return {
    items,
    hasMore,
    isModalVisible,
    fetchMoreData,
    handleCancelDelete,
    handleClearCart,
    handleConfirmDelete,
  };
};

export default useCartPage;
