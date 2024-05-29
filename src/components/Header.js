import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md  bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 ">
      <div>
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="w-40 p-4" />
        </Link>
      </div>
      <ul className="flex items-center p-4 m-4">
        <li className="px-4">
          <Link to="/" className="text-blue-700 underline ">
            {" "}
            Home{" "}
          </Link>
        </li>

        {/* reading cartdata */}
        {/* whenver my stoe is gettign modified , it is changing */}
        <li className="px-4 font-bold text-xl">
          <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
