import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../store/cartSlice";
import { MdImageNotSupported } from "react-icons/md";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  console.log({item}, 'in cartitems')
  const { item: cartItem, quantity } = item;
  const { card } = cartItem;
  const { info } = card;

  const handleIncrement = () => {
    dispatch(incrementQuantity(info.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(info.id));
  };

  const formatPrice = (price) => {
    return (Math.round(price * 100) / 100).toFixed(2);
  };

  return (
    <React.Fragment key={`${info.id}-${quantity}`}>
      <div className="flex items-center bg-white p-4 w-full ">
        {info?.imageId ? (
          <img
            src={`${CDN_URL}${info.imageId}`}
            className="w-10 h-10 rounded-full shadow-lg bg-white"
          />
        ) : (
          <div className="shadow-lg bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <MdImageNotSupported size={25} color="#040" />
          </div>
        )}

        <h1 className="flex-1 text-gray-700 text-base mx-3 max-w-[45%]">
          {info?.name}
        </h1>
        <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md border border-gray-200 space-x-4">
          <button className="px-2" onClick={handleDecrement}>
            <div className="text-green-600 text-lg uppercase font-bold">-</div>
          </button>
          <h2 className="text-green-600 text-lg uppercase font-bold">
            {quantity}
          </h2>
          <button className="px-2" onClick={handleIncrement}>
            <div className="text-green-600 text-lg uppercase font-bold">+</div>
          </button>
        </div>
        <div className="ml-auto text-right pr-1">
          <h3 className="text-black text-base font-semibold">
            ₹
            {formatPrice(
              ((info?.price || info?.defaultPrice) / 100) * quantity
            )}
          </h3>
        </div>
      </div>
      <div className="h-[0.5] bg-gray-300" />
    </React.Fragment>
  );
};

export default CartItems;
