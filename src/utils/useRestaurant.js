import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./contants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_API + id);
    const { data } = await res.json();
    setRestaurant(data);
  };

  return restaurant;
};

export default useRestaurant;
