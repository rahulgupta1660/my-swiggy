import { useState } from "react";
import Item from "./Item";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordian = ({ data }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="py-4 border-b-gray-200 border-b-8">
      {/* header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span className="font-extrabold text-lg">{`${data?.title} (${data?.itemCards.length})`}</span>
        <span>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      {/* body */}
      {show && (
        <>
          {data?.itemCards.map((item) => (
            <Item key={item?.card?.info?.id} item={item?.card?.info} />
          ))}
        </>
      )}
    </div>
  );
};

export default Accordian;
