import { useState, useEffect } from "react";
import {
  MENU_API_END_URL,
  MENU_API_START_URL,
  MENU_LIST_URL,
} from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const url = `${MENU_LIST_URL}${resId}`;

  const fetchMenu = async () => {
    const response = await fetch(url);

    const json = await response.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
