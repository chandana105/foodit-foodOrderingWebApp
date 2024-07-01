import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from "../store/cartSlice";
import { useState } from "react";

const useMenuListItem = (item) => {
  const restaurant = useSelector((state) => state?.restaurant?.restaurant);
  const cart = useSelector((state) => state.cart);

  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (cart.resId && cart.resId !== restaurant?.id) {
      setModalVisible(true);
    } else {
      dispatch(addItem({ restaurant, item }));
    }
  };

  const handleConfirmReplace = () => {
    dispatch(clearCart());
    dispatch(addItem({ restaurant, item }));
    setModalVisible(false);
  };

  const handleCancelReplace = () => {
    setModalVisible(false);
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.card.info.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.card.info.id));
  };

  const cartItem = cart.items.find(
    (itemInCart) => itemInCart.item.card.info.id === item.card.info.id
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  return {
    handleAddItem,
    handleIncrement,
    handleDecrement,
    handleCancelReplace,
    handleConfirmReplace,
    quantity,
    isModalVisible,
  };
};

export default useMenuListItem;
