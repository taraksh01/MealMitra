import restaurantData from "../../utils/restaurantData";
import Restaurant from "./Restaurant";
import "../styles/Body.css";

const Body = () => {
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
        {restaurantData.map((restaurant) => (
          <Restaurant key={restaurant.info.id} restData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
