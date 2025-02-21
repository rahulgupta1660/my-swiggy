import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";
import { FaStar } from "react-icons/fa";
import Accordian from "./Accordian";

const Restaurant = () => {
  const { id } = useParams();

  const data = useRestaurant(id);

  const restaurant = data?.cards[2]?.card?.card?.info;

  const categories =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return !restaurant ? (
    <>loading</>
  ) : (
    <>
      <strong className="text-xl font-bold">{restaurant?.name}</strong>
      <div className="bg-linear-to-b from-white to-slate-200 rounded-b-3xl border-t-gray-300 border-t-[1px] p-5 my-5">
        <div className="bg-white rounded-3xl border-gray-300 border-[1px]">
          <div className="p-4">
            <div className="flex gap-2">
              <span className="bg-green-600 inline-block p-1 rounded-full">
                <FaStar color="#fff" />
              </span>
              <div className="font-bold flex gap-2">
                <p>
                  {restaurant?.avgRating}&nbsp;({restaurant?.totalRatingsString}
                  )
                </p>
                <p>•</p>
                <p>{restaurant?.costForTwoMessage}</p>
              </div>
            </div>
            <p className="text-[#ff5200] font-bold underline">
              {restaurant?.cuisines?.join(" , ")}
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-col items-center">
                <span className="content-[''] bg-gray-300 w-[7px] h-[7px] rounded-full"></span>
                <span className="content-[''] bg-gray-300 w-[1px] h-5"></span>
                <span className="content-[''] bg-gray-300 w-[7px] h-[7px] rounded-full"></span>
              </div>
              <div>
                <p>
                  <b className="pr-2 text-sm">Outlet</b>
                  <small>{restaurant?.locality}</small>
                </p>
                <p>
                  <b className="text-sm">{restaurant?.sla?.slaString}</b>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 px-4 py-3 bg-linear-to-r  from-white rounded-b-3xl to-[#ffedefe6]">
            <div className="flex items-center gap-2">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/Swiggy%20One%20Lite/One_lite_Horizontal.png"
                className="w-15 h-5 object-cover"
                alt="one_lite"
              />
              <p className="text-[#ff5200] font-semibold text-[14px]">
                Free delivery on orders above ₹199
              </p>
            </div>
          </div>
        </div>
      </div>
      <strong className="text-xl font-bold">Deals for you</strong>
      {categories.map((category) => (
        <Accordian
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
        />
      ))}
    </>
  );
};

export default Restaurant;
