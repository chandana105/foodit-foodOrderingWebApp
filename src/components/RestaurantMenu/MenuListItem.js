import React from "react";
import QuantityWithImage from "./QuantityWithImage";
import QunatityWithoutImage from "./QunatityWithoutImage";
import useMenuListItem from "../../hooks/useMenuListItem";
import CartReplaceModal from "./CartReplaceModal";
import { useSelector } from "react-redux";

const MenuListItem = ({ item }) => {
  const {
    handleAddItem,
    handleIncrement,
    handleDecrement,
    quantity,
    isModalVisible,
    handleCancelReplace,
    handleConfirmReplace,
  } = useMenuListItem(item);

  const restaurant = useSelector((state) => state?.restaurant?.restaurant);

  const formatPrice = (price) => {
    return (price / 100).toFixed(2);
  };

  return (
    <>
      <div
        className="py-10 border-b-2 border-gray-100 flex justify-between relative"
        key={item.card.info.id}
        data-testid="foodItems"
      >
        <div className="w-9/12">
          <h1 className="font-medium text-lg">{item.card.info.name}</h1>
          <h2 className="font-normal text-sm">
            ₹
            {item.card.info.price
              ? formatPrice(item.card.info.price)
              : formatPrice(item.card.info.defaultPrice)}
          </h2>
          <p className="mt-4 text-gray-400 opacity-6 text-sm ">
            {item.card.info.description}
          </p>
        </div>
        <div className="w-2/12 relative">
          {item.card.info.imageId ? (
            <QuantityWithImage
              item={item}
              handleAddItem={handleAddItem}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              quantity={quantity}
            />
          ) : (
            <QunatityWithoutImage
              handleAddItem={handleAddItem}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              quantity={quantity}
            />
          )}
        </div>
      </div>
      <CartReplaceModal
        isModalVisible={isModalVisible}
        onCancel={handleCancelReplace}
        onConfirm={handleConfirmReplace}
        replacingRestaurantName={restaurant?.name}
      />
    </>
  );
};

export default MenuListItem;
