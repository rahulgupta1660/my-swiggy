import { FaCaretUp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdPricetag } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(clearCart());
  };

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <button
            className="my-2 py-2 px-3 bg-black text-white rounded-lg cursor-pointer"
            onClick={handleCart}
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <div
              key={item?.id}
              className="py-4 border-b border-gray-200 flex justify-between items-center"
            >
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
                <img
                  src={`${CDN_URL}/${item?.imageId}`}
                  className="w-40 h-40 object-cover rounded-2xl cursor-pointer"
                  alt={item?.name}
                  onClick={() => setModal(true)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>your cart is empty</div>
      )}
    </>
  );
};

export default Cart;
