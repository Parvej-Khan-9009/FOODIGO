import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { menuListImageDatabase, blankWhiteImage } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addDdifferentRestaurentData, addItem, increaseItem, decreaseItem, } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function RestaurentCategoryList( { foodId, foodName, foodPrice, foodDescription, foodImage, restaurantInfo, restartRestaurantList, } ) {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [detectChange, setDetectChange] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  function findItemQuantity() {
    let result = cartData.findIndex((data) => data.id == foodId);
    if (result > -1) {
      setItemQuantity(cartData[result]?.quantity);
    } else {
      setItemQuantity(0);
    }
  }

  function addToCart(itemInfo) {
    if (cartData[0]?.restaurant?.name === itemInfo?.restaurant?.name || cartData.length == 0) {
      dispatch(addItem(itemInfo, restartRestaurantList));
      toast.success("Item added to Cart", {
        position: "bottom-center",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      setDetectChange((preVal)=> preVal + 1);
    } else {
      restartRestaurantList.current.classList.remove("hidden");
      dispatch(addDdifferentRestaurentData(itemInfo));
    }
  }

  function increaseQuantity(currentId) {
    dispatch(increaseItem({ identity: "id", id: currentId }));
    setDetectChange((preVal)=> preVal + 1);
  }

  function decreaseQuantity(currentId) {
    dispatch(decreaseItem({ identity: "id", id: currentId }));
    setDetectChange((preVal)=> preVal + 1);
  }

  useEffect(() => {
    findItemQuantity();    
  }, [detectChange, cartData]);
  
  return (
    <>
      <div>
        <div className="w-full flex gap-3 xs:gap-2 justify-between pt-4 pb-[55px] items-center border-b-[2px] border-[#E9E9E9] px-2">
          <div className="w-[67%]">
            <FaRegDotCircle color="green" />
            <p className="font-bold sm:text-lg text-base">{foodName}</p>
            <span className="font-medium sm:text-base text-sm">
              ₹{" "}
              {foodPrice}
            </span>
            <p className="pt-2 text-[#676A6D] sm:text-base text-[12px]">
              {foodDescription}
            </p>
          </div>

          <div className="relative">
            {foodImage ? (
              <img
                className=" sm:w-[150px] w-[115px] xs:w-[105px] sm:h-[150px] h-[115px] xs:h-[105px] non border-0 rounded-xl"
                src={menuListImageDatabase + foodImage}
              />
            ) : (
              <img
                className=" sm:w-[150px] w-[115px] xs:w-[105px] sm:h-[150px] h-[115px] xs:h-[105px] non border-0 rounded-xl"
                src={blankWhiteImage}
              />
            )}

            {itemQuantity == 0 ? (
              <button
                className="border-[2px] bg-slate-100 absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 border-[#E9E9E9] rounded-lg py-1 xs:py-[2px] sm:px-8 px-6 xs:px-5 sm:text-lg text-base xs:text-sm sm:font-bold font-bold text-green-600 hover:bg-[#D9DADB] active:bg-[rgb(203,245,252)] "
                onClick={() => {
                  const itemInfo = {
                    id: foodId,
                    name: foodName,
                    price: foodPrice,
                    quantity: 1,
                    restaurant: restaurantInfo,
                  };
                  addToCart(itemInfo);
                }}
              >
                ADD
              </button>
            ) : (
              <div className="flex sm:gap-6 gap-3 w-[75%] absolute bottom-[-13%] left-1/2 transform -translate-x-1/2 bg-white rounded-lg sm:py-[6px] py-1 xs:py-[1px] border-2 border-[#D4D5D9] items-center justify-center">
                <div className="cursor-pointer">
                  <FaMinus
                    className="sm:h-[12px] h-[10px] xs:h-[9px]"
                    onClick={() => decreaseQuantity(foodId)}
                  />
                </div>
                <div>
                  <span className="font-semibold sm:text-lg text-base xs:text-[13px] text-[#60B246]">
                    {itemQuantity}
                  </span>
                </div>
                <div className="cursor-pointer">
                  <FaPlus
                    className="sm:h-[12px] h-[10px] xs:h-[9px]"
                    color="#60B246"
                    onClick={() => {
                      increaseQuantity(foodId);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurentCategoryList;