import { CDN_URL } from "../../utils/constants";
import "../styles/Restaurant.css";

const Restaurant = ({ restData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    totalRatingsString,
  } = restData;
  return (
    <div className="restaurant">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="costForTwo">{costForTwo}</p>
        <div className="restaurant-rating">
          <p className="avgRatingString">⭐️ {avgRatingString}</p>
          <p className="totalRatingsString">{totalRatingsString} ratings</p>
        </div>
      </div>
    </div>
  );
};

export const LabeledRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="promoted-restaurant">Veg only</label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
