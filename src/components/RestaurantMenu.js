import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import "../styles/RestaurantMenu.css";
import Item from "./Item";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantMenu(restaurantId);
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
      <div className="restaurant-menu-details">
        <div className="detail">
          <h2 className="name font-bold text-2xl">{name}</h2>
          <p>{cuisines.join(",")}</p>
          <p>{areaName}</p>
          <p>{feeDetails.message}</p>
          <p>{costForTwoMessage}</p>
        </div>
        <div className="rating">
          <p>{avgRating} ⭐️</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="dash"></div>
      <div className="offers-menu">
        {offers?.map((offer, index) => (
          <div className="offer" key={index}>
            <p className="offer-title">{offer?.info?.header}</p>
            <p>
              {offer?.info?.couponCode} | {offer?.info?.description}
            </p>
          </div>
        ))}
      </div>

      <div className="dash"></div>
      <div className="menu">
        {menus
          ?.filter((menu, index) => index > 0 && index < menus.length - 1)
          ?.map((menu, index) => (
            <div className="menu bg-slate-50 shadow-lg" key={index}>
              <div
                onClick={() => {
                  console.log("menu");
                }}
                className="menus-title text-lg cursor-pointer font-bold bg-white py-4 my-2 flex justify-between "
              >
                <span className="pl-1">
                  {menu?.card?.card?.title} (
                  {menu?.card?.card?.itemCards?.length})
                </span>{" "}
                <span>🔻</span>
              </div>

              {menu?.card?.card?.itemCards?.map((item, index) => (
                <div className="pl-2 bg-white" key={index}>
                  {index > 0 && (
                    <div className="border-gray-300 border-b"></div>
                  )}
                  <Item item={item} text={"Add"} />
                </div>
              ))}
              <div></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
