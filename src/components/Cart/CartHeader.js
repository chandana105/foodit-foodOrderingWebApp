import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const CartHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex w-full m-auto items-center justify-between bg-white shadow-md p-4 rounded-md relative">
      {/* <h1 className="text-2xl font-bold text-center flex-grow">Cart</h1> */}
      <div className="flex-grow">
        <h1 className="text-lg font-bold text-center text-black">Cart</h1>
        <h1 className="text-center text-gray-400">Res Name</h1>
      </div>
      <button
        className="absolute right-2 px-6 py-2 bg-white rounded-md border border-gray-200 shadow-md text-green-600 text-sm"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartHeader;
