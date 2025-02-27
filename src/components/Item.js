import { FaCaretUp } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { CDN_URL } from "../utils/contants";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Item = ({ item }) => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    // dispath an action
    dispatch(addItem(item));
  };

  const onClose = () => {
    setModal(false);
  };
  return (
    <>
      <div className="py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="w-3/4">
          {item?.itemAttribute?.vegClassifier === "VEG" ? (
            <GoDotFill className="text-green-700 border-2 border-green-700 rounded-md" />
          ) : (
            <FaCaretUp className="text-red-700 border-2 border-red-700 rounded-md" />
          )}
          <p className="font-bold text-lg text-gray-700">{item?.name}</p>
          <div className="flex items-center gap-[1px]">
            <div className="flex items-center">
              <p>
                <LiaRupeeSignSolid />
              </p>
              <p className="font-bold">
                {item?.defaultPrice / 100 || item?.price / 100}
              </p>
            </div>
            <IoMdPricetag className="text-green-600 text-[13px]" />
            {item?.offerTags?.length > 0 && (
              <small className="font-bold text-gray-600">
                {item.offerTags[0].title} {item.offerTags[0].subTitle}
              </small>
            )}
          </div>
          {Object.keys(item?.ratings?.aggregatedRating).length > 0 && (
            <div className="text-[12px] flex items-center gap-1 text-green-700 pt-3">
              <IoStar className="" />
              <p className="font-bold">
                {item?.ratings?.aggregatedRating?.rating}{" "}
                <span className="text-gray-700 font-semibold">
                  ({item?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </p>
            </div>
          )}
          <p className="text-gray-600 pt-3 tracking-tighter font-semibold">
            {item?.description}
          </p>
        </div>
        <div className="w-1/6">
          <div className="flex flex-col justify-center items-center relative">
            <div
              className="absolute text-green-700 w-32 flex items-center justify-center bottom-[25px] shadow-md h-10 uppercase font-bold cursor-pointer border bg-white rounded-lg text-center hover:bg-gray-200 border-gray-300"
              onClick={handleAddItem}
            >
              add
            </div>
            <img
              src={`${CDN_URL}/${item?.imageId}`}
              className="w-40 h-40 object-cover rounded-2xl cursor-pointer"
              alt={item?.name}
              onClick={() => setModal(true)}
            />
            <p className="pt-3 text-gray-700 text-[12px]">Customisable</p>
          </div>
        </div>
      </div>
      {modal && <Modal onClose={onClose} item={item} />}
    </>
  );
};

export default Item;
