import React from "react";
import { CDN_URL } from "../../utils/constants";

const CartItems = ({ itemCards }) => {
  console.log({ itemCards });
  return (
    <>
      {itemCards.map((itemCard) => {
        // const { item: cartItem, quantity } = itemCard;
        // const { card } = cartItem;
        // const { info } = card;

        const { card } = itemCard;
        const { info } = card;
        return (
          <div
            key={info.id} // Add a key prop to avoid warnings
            className="flex items-center bg-white p-4   w-full "
          >
            {info?.imageId ? (
              <img
                src={`${CDN_URL}${info.imageId}`}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                {/* <Icon name="hide-image" size={25} color="#040" /> */}
                <h1>No Image</h1>
              </div>
            )}

            <h1
              className="flex-1 text-gray-700 text-base mx-3 truncate max-w-[45%]"
              // style={styles.itemName}
            >
              {info?.name}
            </h1>
            <div
              className="flex items-center justify-between py-2 px-3 bg-white rounded-md border border-gray-200 space-x-4 "
              // style={styles.buttonBox}
            >
              <button
                className="px-2"
                // onClick={handleDecrement}
              >
                <div className="text-green-600 text-lg uppercase font-bold">
                  -
                </div>
              </button>
              <h2 className="text-green-600 text-lg uppercase font-bold">
                1
              </h2>
              <button
                className="px-2"
                // onClick={handleIncrement}
              >
                <div className="text-green-600 text-lg uppercase font-bold">
                  +
                </div>
              </button>
            </div>
            <div className="ml-auto text-right pr-1 ">
              <h3
                className="text-black text-base font-semibold"
                // style={styles.priceView}
              >
                {/* ₹
                {formatPrice(
                  ((info?.price || info?.defaultPrice) / 100) * quantity
                )} */}
                ₹{info.price / 100} {/* Assuming price is given in paise */}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;

// itemName: {
//     maxWidth: '40%',
//   },
//   buttonBox: {
//     width: 100,
//   },
//   priceView: {
//     width: 80,
//     textAlign: 'right',
//   },
