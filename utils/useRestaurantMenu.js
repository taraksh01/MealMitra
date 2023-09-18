import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + restaurantId);
    const json = await data.json();
    setResInfo(json?.data?.cards);
  };

  return resInfo
};

export default useRestaurantMenu;
