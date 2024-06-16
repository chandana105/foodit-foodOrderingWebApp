import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import CartHeader from "../components/Cart/CartHeader";
import CartItems from "../components/Cart/CartItems";
import CartFooter from "../components/Cart/CartFooter";
import { BeatLoader } from "react-spinners";
import CartDeleteModal from "../components/Cart/CartDeleteModal";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [items, setItems] = useState(cartItems.slice(0, 10));
  const [hasMore, setHasMore] = useState(cartItems.length > 10);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const fetchMoreData = () => {
    if (items.length >= cartItems.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...cartItems.slice(prevItems.length, prevItems.length + 10),
      ]);
    }, 500);
  };

  const handleConfirmDelete = () => {
    dispatch(clearCart());
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setItems(cartItems.slice(0, 10));
    setHasMore(cartItems.length > 10);
  }, [cartItems]);

  const handleClearCart = () => {
    setModalVisible(true);
  };

  return (
    <div className="w-full mb-2 rounded-md m-4 p-4 mt-24">
      <div className="flex flex-col w-6/12 m-auto items-center justify-between">
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-bold">
            Your Cart is empty, Add some items to it!!
          </h1>
        ) : (
          <>
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
                      <BeatLoader color="#EA580C" />
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
            </>

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
