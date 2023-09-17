import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=121603&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data?.json();
    console.log(json?.data?.cards);
  };

  return <div className="restaurant-menu">RestaurantMenu</div>;
};

export default RestaurantMenu;
