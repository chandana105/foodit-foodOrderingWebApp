import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrementQuantity,
  incrementQuantity,
} from "../store/cartSlice";

const useMenuListItem = (item) => {
  const restaurant = useSelector((state) => state?.restaurant?.restaurant);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (cart.resId && cart.resId !== restaurant?.id) {
      // setModalVisible(true);
      console.log("modal visible");
    } else {
      dispatch(addItem({ restaurant, item }));
    }
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
    quantity,
  };
};

export default useMenuListItem;
