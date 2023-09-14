import restaurantData from "../../utils/restaurantData";
import Restaurant from "./Restaurant";
import { useState } from "react";
import "../styles/Body.css";

const Body = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(restaurantData);

  const topRatedRestaurants = () => {
    const topRated = restaurantInfo.filter((r) => r.info.avgRating >= 4.5);
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
      <div className="restaurant-layout">
        {restaurantInfo.map((restaurant) => (
          <Restaurant key={restaurant.info.id} restData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
