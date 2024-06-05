import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ itemCards }) => {
  // dispatch is given by usedispatch hook
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="mt-6">
      {itemCards.map((itemCard) => (
        <div
          className="py-10  border-b-2 border-gray-100 flex justify-between"
          key={itemCard.card.info.id}
          data-testid="foodItems"
        >
          <div className="w-10/12">
            <h1 className="font-medium text-lg">{itemCard.card.info.name}</h1>
            <h2 className="font-normal text-sm">
              ₹
              {itemCard.card.info.price
                ? itemCard.card.info.price / 100
                : itemCard.card.info.defaultPrice / 100}
            </h2>
            <p className="mt-4 text-gray-400 opacity-6 text-sm">
              {itemCard.card.info.description}
            </p>
          </div>

          <div className="w-2/12">
            {itemCard.card.info.imageId ? (
              <>
                <img
                  src={`${CDN_URL}${itemCard.card.info.imageId}`}
                  className=" rounded-md"
                />
                <div className="absolute">
                  <button
                    className="absolute bottom-[-18px] left-4 flex items-center justify-center m-auto  px-6 py-2 bg-white rounded-md border border-gray-200 border-solid shadow-md text-green-600 text-sm"
                    onClick={() => handleAddItem(itemCard)}
                  >
                    ADD
                  </button>
                </div>
              </>
            ) : (
              <div className="absolute">
                <button
                  className="absolute  left-4 flex items-center justify-center  px-6 py-2 bg-white rounded-md border border-gray-200 border-solid shadow-md text-green-600 text-sm"
                  // onClick={handleAddItem}
                  onClick={() => handleAddItem(itemCard)}
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
