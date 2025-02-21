const RestaurantShimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-y-10 animate-pulse">
      {Array.from({ length: 8 }).map((item, index) => (
        <div key={`${index}${item}`} className="flex flex-col gap-2">
          <p className="w-48 h-48 bg-slate-200 rounded-md shadow-xl" />
          <p className="w-10 h-3 bg-slate-200 rounded-md" />
          <p className="w-32 h-3 bg-slate-200 rounded-md" />
          <p className="w-48 h-3 bg-slate-200 rounded-md" />
          <p className="w-28 h-3 bg-slate-200 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default RestaurantShimmer;
