import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="flex justify-between items-center shadow-md  bg-pink-200 mt-auto">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-40 p-4" />
      </div>
      <h4>© 2023 Swiggy</h4>
      <ul className="flex items-center">
        <li className="px-4">Insta</li>
        <li className="px-4">Fb</li>
        <li className="px-4">google</li>
      </ul>
    </div>
  );
};

export default Footer;
