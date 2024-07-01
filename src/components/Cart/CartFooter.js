import React from "react";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="relative p-5 mt-5 space-y-4 w-full bg-white shadow-xl rounded-md">
      <div className="flex justify-between">
        <h2 className="text-gray-400">Subtotal</h2>
        <h2 className="text-gray-400">₹{(cart.orderTotal - 20).toFixed(2)}</h2>
      </div>

      <div className="flex justify-between">
        <h2 className="text-gray-400">Delivery fee</h2>
        <h2 className="text-gray-400">₹20.00</h2>
      </div>

      <div className="flex justify-center items-center rounded-lg bg-green-600 p-4 gap-4 text-lg">
        <h1 className="text-white font-bold">Order Total : </h1>
        <h1 className="text-white font-bold">₹{cart.orderTotal.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default CartFooter;
