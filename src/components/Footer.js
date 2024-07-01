import React from "react";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center shadow-top p-4 w-full shadow-md bg-slate-50 px-4 md:px-20">
      <div className="mb-4 sm:mb-0">
        <img src={LOGO_URL} alt="logo" className="h-24 object-contain sm:w-32" />
      </div>
      <h4 className="mb-4 sm:mb-0">© 2024 FOODit.</h4>
      <ul className="flex items-center space-x-4">
        <li>Insta</li>
        <li>Fb</li>
        <li>Google</li>
      </ul>
    </div>
  );
};

export default Footer;
