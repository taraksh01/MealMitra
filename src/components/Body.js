import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import "../styles/Body.css";
import ShimmerContainer from "./Shimmer";

const Body = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();
    setRestaurantInfo(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRatedRestaurants = () => {
    const topRated = restaurantInfo.filter((r) => r.info.avgRating >= 4.0);
    setRestaurantInfo(topRated);
  };

  return (
    <div className="body">
      <div className="filter">
        <p>
          Sort by{" "}
          <span className="top-rated" onClick={topRatedRestaurants}>
            Top rated
          </span>
        </p>
      </div>
      {restaurantInfo.length == 0 ? (
        <ShimmerContainer />
      ) : (
        <div className="restaurant-layout">
          {restaurantInfo.map((restaurant) => (
            <Restaurant
              key={restaurant?.info?.id}
              restData={restaurant?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
