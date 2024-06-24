import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div
      className="flex justify-around
     items-center shadow-top  p-4 w-full px-44 shadow-md bg-slate-50"
    >
      <div>
        <img src={LOGO_URL} alt="logo" className="w-32" />
      </div>
      <h4 className="">© 2023 FoodApp</h4>
      <ul className="flex items-center">
        <li className="px-4 ">Insta</li>
        <li className="px-4 ">Fb</li>
        <li className="px-4 ">Google</li>
      </ul>
    </div>
  );
};

export default Footer;
