import { useEffect, useState } from "react";
import { CARDS_API } from "./contants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(CARDS_API);
      const { data } = await res.json();
      const { restaurants } =
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
      setRestaurants(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurants;
};

export default useRestaurants;
