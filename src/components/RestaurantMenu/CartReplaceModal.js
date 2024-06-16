import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";

export default function CartReplaceModal({
  isModalVisible,
  onCancel,
  onConfirm,
  replacingRestaurantName,
}) {
  const cart = useSelector((state) => state?.cart);

  const customStyles = {
    content: {
      width: "40%",
      height: "30%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  React.useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalVisible]);

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={onCancel}
      style={customStyles}
    >
      <div className="w-full bg-white rounded-xl relative">
        {/* Modal header */}
        <button className="absolute top-2 right-2" onClick={onCancel}>
          <IoMdCloseCircle size={32} color="#B5B7BA" />
        </button>
        {/* Modal body */}
        <div className="p-5 text-center">
          <p className="text-black font-bold text-xl mb-4">
            Replace cart item?
          </p>
          <p className="text-gray-600 text-lg leading-6 text-justify">
            Your cart contains dishes from {cart?.restaurantName}. Do you want
            to discard the selection and add dishes from{" "}
            {replacingRestaurantName}?
          </p>
        </div>
        {/* Modal footer */}
        <div className="flex justify-center mt-4 pb-4 gap-10">
          <button
            className="px-12 py-2 bg-red-50 rounded-lg shadow-sm"
            onClick={onCancel}
          >
            <h2 className="text-orange-600 text-lg font-bold">No</h2>
          </button>
          <button
            className="px-12 py-2 bg-orange-600 rounded-lg shadow-sm"
            onClick={onConfirm}
          >
            <h2 className="text-white text-lg font-bold">Replace</h2>
          </button>
        </div>
      </div>
    </Modal>
  );
}
