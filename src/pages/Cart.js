import React from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import CartHeader from "../components/Cart/CartHeader";
import CartItems from "../components/Cart/CartItems";
import CartFooter from "../components/Cart/CartFooter";
import { BeatLoader } from "react-spinners";
import CartDeleteModal from "../components/Cart/CartDeleteModal";
import useCartPage from "../hooks/useCartPage";
import { orangeIconColor } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const {
    items,
    hasMore,
    isModalVisible,
    fetchMoreData,
    handleCancelDelete,
    handleClearCart,
    handleConfirmDelete,
  } = useCartPage(cartItems);

  return (
    <div className="w-full mb-2 rounded-md  p-4 mt-24">
      <div className="flex flex-col w-full sm:w-9/12  md:w-11/12 lg:w-6/12 max-w-4xl mx-auto items-center justify-between">
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-bold text-center">
            Your Cart is empty, Add some items to it!!
          </h1>
        ) : (
          <>
            <CartHeader onClearCart={handleClearCart} />
            <div
              id="scrollableDiv"
              style={{
                height: "370px",
                overflow: "auto",
                width: "100%",
              }}
              className="mt-5"
            >
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                  <div className="flex items-center justify-center mt-2">
                    <BeatLoader color={`${orangeIconColor}`} />
                  </div>
                }
                scrollableTarget="scrollableDiv"
              >
                {items.map((item, index) => (
                  <CartItems key={index} item={item} />
                ))}
              </InfiniteScroll>
            </div>
            <CartFooter />
            <CartDeleteModal
              isModalVisible={isModalVisible}
              onCancel={handleCancelDelete}
              onConfirm={handleConfirmDelete}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
