import React from "react";
import { CDN_URL } from "../../utils/constants";

const QuantityWithImage = ({
  item,
  handleAddItem,
  handleDecrement,
  handleIncrement,
  quantity,
}) => {
  return (
    <>
      <img
        src={`${CDN_URL}${item.card.info.imageId}`}
        className="rounded-md w-40 h-24"
      />
      {quantity > 0 ? (
        <div className="absolute">
          <div
            className="absolute bottom-[-18px] 
          left-4 sm:left-3  
            lg:left-2 xl:left-[14px] w-[67]
          xl:w-[87] sm:w-[68]  lg:w-[80] md:w-[95] mx-auto bg-white shadow-md "
          >
            <div className=" -mt-5 flex items-center justify-between py-1 px-3 bg-white rounded-md border border-gray-200 ">
              <button className="" onClick={handleDecrement}>
                <div className="text-green-600 text-sm lg:text-lg uppercase font-bold">
                  -
                </div>
              </button>
              <h2 className="text-green-600 text-md lg:text-lg  uppercase font-bold">
                {quantity}
              </h2>
              <button className="" onClick={handleIncrement}>
                <div className="text-green-600 text-sm lg:text-lg  uppercase font-bold">
                  +
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute">
          <button
            className="sm:px-4 md:px-8 lg:px-5 xl:px-7 px-[18px]  py-2
            absolute bottom-[-18px] left-4 sm:left-4 
            lg:left-3 xl:left-[14px] flex justify-center items-center
              m-auto  bg-white rounded-md border
               border-gray-200 shadow-md text-green-600 text-xs lg:text-sm"
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
