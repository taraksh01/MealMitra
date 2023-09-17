import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=121603&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data?.json();
    // console.log(json?.data?.cards);
    setResInfo(json?.data?.cards);
  };

  if (!resInfo) return <Shimmer />;

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    feeDetails,
    totalRatingsString,
  } = resInfo[0]?.card?.card?.info;

  const offers = resInfo[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const menus = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-card">
        <div className="detail">
          <h2 className="name">{name}</h2>
          <p>{cuisines.join(",")}</p>
          <p>{areaName}</p>
          <p>{feeDetails.message}</p>
          <p>{costForTwoMessage}</p>
        </div>
        <div className="rating">
          <p>{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="offers-menu">
        {offers?.map((offer, index) => (
          <div className="offer" key={index}>
            <h3 className="offers-title">{offer?.info?.header}</h3>
            <p className="coupon-code">{offer?.info?.couponCode}</p>
            <p className="description">{offer?.info?.description}</p>
          </div>
        ))}
      </div>

      <div className="menu">
        {menus
          ?.filter((menu, index) => index > 0 && index < menus.length - 1)
          ?.map((menu, index) => (
            <div className="menu" key={index}>
              <h1 className="menus-title">{menu?.card?.card?.title}</h1>
              <div>
                {menu?.card?.card?.itemCards?.map((item) => (
                  // console.log(item?.card?.info)
                  <div className="item" key={item?.card?.info?.id}>
                    <h4>{item?.card?.info?.name}</h4>
                    <p>{item?.card?.info?.price}</p>
                    <p>{item?.card?.info?.category}</p>
                    <p>{item?.card?.info?.description}</p>
                    <p>{item?.card?.info?.itemAttribute?.vegClassifier}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
