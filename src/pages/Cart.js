import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" w-full mb-2 rounded-md m-4 p-4 mt-24 ">
      <div className="flex flex-col w-6/12 m-auto items-center justify-between">
        {cartItems.length !== 0 && (
          <div className="flex  w-full m-auto items-center justify-between ">
            <h1 className="text-2xl font-bold ">Cart</h1>
            <button
              className=" flex items-center justify-center  px-6 py-2 bg-white rounded-md border border-gray-200 border-solid shadow-md text-green-600 text-sm"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
        <ItemList itemCards={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="text-2xl font-bold">
            Your Cart is empty, Add some items to it!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
