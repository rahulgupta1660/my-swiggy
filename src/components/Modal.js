import { IoIosClose } from "react-icons/io";
import { CDN_URL } from "../utils/contants";
import { FaCaretUp } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { CDN_URL } from "../utils/contants";

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal fixed top-0 left-0 bg-black/50 h-full w-full z-10 flex items-center justify-center">
      <div className="modal_content bg-white rounded-4xl relative h-[680px] w-[500px]">
        <div className="header flex items-center justify-end text-gray-700 font-semibold">
          <div
            className="modal_close cursor-pointer bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-full absolute top-[25px] right-[25px]"
            onClick={onClose}
          >
            <IoIosClose fontSize="25px" className="z-10" />
          </div>
        </div>
        <div className="modal_body">
          <img
            src={`${CDN_URL}/${item?.imageId}`}
            alt={item?.name}
            className="w-full h-100 rounded-t-4xl"
          />
          <div className="p-3">
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
            {item?.ratings?.aggregatedRating && (
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
