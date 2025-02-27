import { useContext, useEffect, useState } from "react";
import RestaurantShimmer from "./RestaurantShimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RESTAURANTS_API } from "../utils/contants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchterm, setSearchterm] = useState("");

  const { user, setUsername } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(RESTAURANTS_API);
      const { data } = await res.json();
      const { restaurants } =
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
      setRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="text"
        className="border p-2 rounded-md text-sm"
        placeholder="Search..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            const searchedRestaurants = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchterm.toLowerCase())
            );
            setfilteredRestaurants(searchedRestaurants);
          }
        }}
      />
      <button
        className="border-2 p-2 mb-1 text-sm rounded-md ml-1"
        onClick={() => {
          const topRated = restaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setfilteredRestaurants(topRated);
        }}
      >
        Top Rated Restaurants
      </button>
      <input
        className="border-gray-300 border p-2 rounded-md ml-1"
        onChange={(e) => setUsername(e.target.value)}
        value={user}
      />
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-4 gap-y-10">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted data={restaurant.info} />
              ) : (
                <RestaurantCard data={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <RestaurantShimmer />
      )}
    </>
  );
};

export default Home;
