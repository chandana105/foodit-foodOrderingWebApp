import React from "react";
import { useSelector } from "react-redux";

const CartHeader = ({ onClearCart }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex w-full items-center justify-center bg-white shadow-md p-4 rounded-md border-b-2 border-b-orange-50 relative">
      <div className="text-center">
        <h1 className="text-lg font-bold text-black">Cart</h1>
        <h1 className="text-gray-400">{cart.restaurantName}</h1>
      </div>
      <button
        className="absolute right-4 px-4 py-2 bg-white rounded-md border border-gray-200 shadow-md text-green-600 text-sm"
        onClick={onClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartHeader;
