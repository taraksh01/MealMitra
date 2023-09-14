import { CDN_URL } from "../../utils/constants";

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
        <div>
          <p className="avgRatingString">{avgRatingString}</p>
          <p className="totalRatingsString">{totalRatingsString}</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
