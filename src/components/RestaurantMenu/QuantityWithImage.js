import React from "react";
import { CDN_URL } from "../../utils/constants";

const QuantityWithImage = ({
  item,
  handleAddItem,
  handleDecrement,
  handleIncrement,
  quantity
}) => {
  return (
    <>
      <img
        src={`${CDN_URL}${item.card.info.imageId}`}
        className="rounded-md w-40 h-24"
      />
      {quantity > 0 ? (
        <div className="absolute">
          <div className="absolute bottom-[-18px] left-4 mx-auto bg-white shadow-md w-[87]">
            <div className=" -mt-5 flex items-center justify-between py-1 px-3 bg-white rounded-md border border-gray-200 ">
              <button className="" onClick={handleDecrement}>
                <div className="text-green-600 text-lg uppercase font-bold">
                  -
                </div>
              </button>
              <h2 className="text-green-600 text-lg uppercase font-bold">
                {quantity}
              </h2>
              <button className="" onClick={handleIncrement}>
                <div className="text-green-600 text-lg uppercase font-bold">
                  +
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute">
          <button
            className="absolute bottom-[-18px] left-4 flex justify-center items-center m-auto px-7 py-2 bg-white rounded-md border border-gray-200 shadow-md text-green-600 text-sm"
            onClick={handleAddItem}
          >
            ADD
          </button>
        </div>
      )}
    </>
  );
};

export default QuantityWithImage;
