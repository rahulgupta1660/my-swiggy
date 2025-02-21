const RestaurantCard = ({ data }) => {
  const { name, areaName, cloudinaryImageId, avgRatingString, cuisines, sla } =
    data;
  return (
    <>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="w-48 h-48 object-cover rounded-md shadow-xl"
      />
      <p className="font-semibold">{name}</p>
      <p>
        ⭐{avgRatingString}🔸{sla?.slaString}
      </p>
      <div className="text-slate-600">
        <p>{cuisines.toString()}</p>
        <p>{areaName}</p>
      </div>
    </>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-white text-black p-1">Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
