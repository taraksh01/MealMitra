import restaurantData from "../../utils/restaurantData";
import Restaurant from "./Restaurant";

const Body = () => {
  return (
    <div className="body">
      {restaurantData.map((restaurant) => (
        <Restaurant key={restaurant.info.id} restData={restaurant.info} />
      ))}
    </div>
  );
};

export default Body;
