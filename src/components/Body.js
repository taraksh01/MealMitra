import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerContainer from "./Shimmer";
import "../styles/Body.css";

const Body = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRatedRestaurants = () => {
    const topRated = restaurantInfo.filter((r) => r?.info?.avgRating >= 4.0);
    console.log(topRated);
    setFilteredRestaurant(topRated);
  };

  const handleSearch = () => {
    const filtered = restaurantInfo.filter((r) =>
      r?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRestaurant(filtered);
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
        <div className="search">
          <input
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={() => setSearchText(event.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      {restaurantInfo?.length == 0 ? (
        <ShimmerContainer />
      ) : (
        <div className="restaurant-layout">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              className="restaurant-card"
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <Restaurant restData={restaurant?.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
