import React, { useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";

export default function CartDeleteModal({
  isModalVisible,
  onCancel,
  onConfirm,
}) {
  const cart = useSelector((state) => state?.cart);

  const customStyles = {
    content: {
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
      position: "relative",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  useEffect(() => {
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
      className="w-10/12 sm:w-3/4 md:w-2/3 lg:w-6/12 xl:w-2/5"
    >
      <div className="w-full bg-white rounded-xl relative p-5 sm:p-8 md:p-10 ">
        <button className="absolute top-5 right-5" onClick={onCancel}>
          <IoMdCloseCircle size={32} color="#B5B7BA" />
        </button>
        {/* Modal body */}
        <div className="text-center">
          <p className="text-black font-bold text-lg sm:text-xl  mb-4">
            Clear cart?
          </p>
          <p className="text-gray-600 text-base sm:text-lg  leading-6 text-justify">
            Are you sure you want to clear your cart from {cart?.restaurantName}
            ?
          </p>
        </div>
        {/* Modal footer */}
        <div className="flex justify-center mt-10  gap-4 sm:gap-6 md:gap-10">
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 bg-red-50 rounded-lg shadow-sm"
            onClick={onCancel}
          >
            <h2 className="text-orange-600 text-base sm:text-lg  font-bold">
              No
            </h2>
          </button>
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 bg-orange-600 rounded-lg shadow-sm"
            onClick={onConfirm}
          >
            <h2 className="text-white text-base sm:text-lg  font-bold">Yes</h2>
          </button>
        </div>
      </div>
    </Modal>
  );
}

// import React, { useEffect } from "react";
// import Modal from "react-modal";
// import { useSelector } from "react-redux";
// import { IoMdCloseCircle } from "react-icons/io";

// export default function CartDeleteModal({
//   isModalVisible,
//   onCancel,
//   onConfirm,
// }) {
//   const cart = useSelector((state) => state?.cart);

//   const customStyles = {
//     content: {
//       width: "70%",
//       maxWidth: "40%",
//       height: "30%",
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: "15px",
//       padding: "20px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       position: "relative",
//     },
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//     },
//   };

//   useEffect(() => {
//     if (isModalVisible) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isModalVisible]);

//   return (
//     <Modal
//       isOpen={isModalVisible}
//       onRequestClose={onCancel}
//       style={customStyles}
//     >
//       <div className="w-full bg-white rounded-xl relative  ">
//         <button className="absolute top-2 right-2" onClick={onCancel}>
//           <IoMdCloseCircle size={32} color="#B5B7BA" className="sm:w-7" />
//         </button>
//         {/* Modal body */}
//         <div className="p-5 text-center">
//           <p className="text-black font-bold text-xl mb-4 sm:text-lg md:text-xl">
//             Clear cart?
//           </p>
//           <p className="text-gray-600 text-lg leading-6 text-justify sm:text-base">
//             Are you sure you want to clear your cart from {cart?.restaurantName}
//             ?
//           </p>
//         </div>
//         {/* Modal footer */}
//         <div className="flex justify-center mt-4 pb-4 gap-10 sm:gap-3">
//           <button
//             className="px-12 py-2 bg-red-50 rounded-lg shadow-sm sm:px-6"
//             onClick={onCancel}
//           >
//             <h2 className="text-orange-600 text-lg font-bold sm:text-base">
//               No
//             </h2>
//           </button>
//           <button
//             className="px-12 py-2 bg-orange-600 rounded-lg shadow-sm sm:px-6"
//             onClick={onConfirm}
//           >
//             <h2 className="text-white text-lg font-bold sm:text-base">Yes</h2>
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
