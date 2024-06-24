import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const location = useLocation();

  const totalQuantity = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-around shadow-md bg-pink-200 sm:bg-yellow-200 md:bg-green-200 lg:bg-white ">
      <div>
        <Link to="/">
          <img src={LOGO_URL} alt="logo" className="w-32" />
        </Link>
      </div>
      <ul className="flex items-center justify-center m-4">
        {location.pathname === "/cart" && (
          <Link to="/">
            <li className="px-4 font-bold text-xl text-black flex items-end gap-1">
              <GoHomeFill size={35} color="#EA580C" />
              Home
            </li>
          </Link>
        )}
        <Link to="/cart">
          <li className="px-4 font-bold text-xl flex items-end">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full w-7 h-7 p-2 text-base ml-7 flex items-center justify-center -mb-3 bg-white z-10 text-black border border-orange-600 font-normal">
                {totalQuantity}
              </div>
              <FaShoppingCart size={35} color="#EA580C" />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
