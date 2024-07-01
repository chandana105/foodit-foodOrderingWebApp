import React from "react";

const QunatityWithoutImage = ({
  handleAddItem,
  handleDecrement,
  handleIncrement,
  quantity,
}) => {
  return (
    <>
      {quantity > 0 ? (
        <div className="absolute  bottom-0 left-0 w-full flex justify-center">
          <div className="bg-white shadow-md w-[67]
          xl:w-[87] sm:w-[68]  lg:w-[80] md:w-[95]">
            <div className="flex items-center justify-between py-1 px-3 bg-white rounded-md border border-gray-200 ">
              <button onClick={handleDecrement}>
                <div className="text-green-600 text-sm lg:text-lg uppercase font-bold">
                  -
                </div>
              </button>
              <h2 className="text-green-600 text-md lg:text-lg uppercase font-bold">
                {quantity}
              </h2>
              <button className="" onClick={handleIncrement}>
                <div className="text-green-600 text-sm lg:text-lg uppercase font-bold">
                  +
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <button
            className="sm:px-4 md:px-8 lg:px-5 xl:px-7 px-[18px] py-2 bg-white rounded-md border border-gray-200 shadow-md text-green-600 text-xs lg:text-sm"
            onClick={handleAddItem}
          >
            ADD
          </button>
        </div>
      )}
    </>
  );
};

export default QunatityWithoutImage;
