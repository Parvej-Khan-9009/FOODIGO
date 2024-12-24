import { StarLogo } from "../utils/Constant";
import { MdDirectionsBike } from "react-icons/md";
import { PiHandsPraying } from "react-icons/pi";
import RestaurentCategory from "./RestaurentCategory";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../utils/cartSlice";
import Shimmer from "./Shimmer";
import { menuDataBase } from "../utils/Constant";
import useFetchResMenuData from "../utils/useFetchResMenuData";

function RestaurentMenu() {
  const [showIndex, setShowIndex] = useState(0);
  const { menuId } = useParams();
  let menuData = useFetchResMenuData(menuDataBase, menuId);
  const restartRestaurantList = useRef(null);
  const differentRestaurantInfo = useSelector((store) => store.cart.differentRestaurentData);
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.items);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData));
  });

  if (menuData == null) return <Shimmer />;

  function resetCartData() {
    dispatch(resetCart(differentRestaurantInfo));
    restartRestaurantList.current.classList.toggle("hidden");
  }
  function removeRestartRestaurantList() {
    restartRestaurantList.current.classList.toggle("hidden");
  }

  let headerData = menuData?.data?.cards[2]?.card?.card?.info;

  let restaurantInfo = {
    name: headerData?.name,
    area: headerData?.areaName,
    image: headerData?.cloudinaryImageId,
  };

  let getReleventData =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let releventMenuData = getReleventData?.filter(
    (item) =>
      item?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div
        className="w-full hidden duration-700 h-screen z-10 fixed top-0 bg-[rgba(0,0,0,0.1)]"
        ref={restartRestaurantList}
        onClick={removeRestartRestaurantList}
      >
        <div className="flex h-screen items-end justify-center md:pb-10 pb-3">
          <div
            className="xl:w-[42%] md:w-[50%] sm:w-[65%] w-[90%] xs:w-[95%] bg-white shadow-xl sm:p-7 p-5 xs:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div>
              <h1 className="md:text-xl text-lg font-semibold pb-2">
                Items already in cart
              </h1>
              <p className="md:text-base text-sm">
                Your cart contains items from other restaurant. Would you like
                to reset your cart for adding items from this restaurant?
              </p>
            </div>
            <div className="flex justify-center gap-7 pt-7 ">
              <button
                className="md:w-[50%] w-[40%] xs:w-[60%] md:text-base text-sm font-medium text-[#60b246] border-[2px] border-[#60b246] py-3 xs:py-2"
                onClick={removeRestartRestaurantList}
              >
                NO
              </button>
              <button
                className="md:w-[50%] w-[40%] xs:w-[60%] md:text-lg text-sm font-semibold text-white bg-[#60b246] py-3 xs:py-2"
                onClick={resetCartData}
              >
                YES, START FRESH
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:pt-28 sm:pt-20 pt-[70px]">
        <div className="lg:w-[50%] sm:w-[70%] w-[95%] mx-auto">
          <h1 className="sm:text-2xl text-xl font-extrabold">{headerData?.name}</h1>
          <div className="p-4 mt-5 border-[1px] border-[#D9DADB] bg-slate-50 rounded-2xl shadow-xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span>
                  <StarLogo />
                </span>
                <p className="text-[16px] xs:text-[14px] font-bold">
                  {headerData?.avgRating} ({headerData?.totalRatingsString}) •{" "}
                  {headerData?.costForTwoMessage}
                </p>
              </div>
              <p className="font-bold text-sm">outlet</p>
              <p className="font-bold text-sm">{headerData?.sla?.slaString}</p>
            </div>
            <div className="flex items-center gap-3 pt-5 ">
              <span>
                <MdDirectionsBike />
              </span>
              <p className=" text-sm text-[#676A6D] ">
                {headerData?.sla?.lastMileTravelString} | ₹39 Delivery fee will
                apply
              </p>
            </div>
          </div>
          <div className="border-b-2 sm:py-11 py-8 mb-5 border-[#E9E9EB] flex gap-2 items-center justify-center">
            <PiHandsPraying />
            <h1 className="font-bold sm:text-lg text-base">MENU</h1>
            <PiHandsPraying />
          </div>
        </div>

        <div className="xl:w-[50%] lg:w-[60%] md:w-[75%] sm:w-[80%] w-[95%] xs:w-[98%] mx-auto">
          {releventMenuData?.map((item, index) => {
            return (
              <RestaurentCategory
                key={index}
                categoryData={item}
                showItem={index == showIndex ? true : false}
                clickShow={setShowIndex}
                currentIndex={index}
                restaurantInfo={restaurantInfo}
                restartRestaurantList={restartRestaurantList}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RestaurentMenu;
