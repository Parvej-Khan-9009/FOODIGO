import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import MainCard from "./MainCard";
import { useRef } from "react";
import { swiggyImageDataBase } from "../utils/Constant";
import { useSelector } from "react-redux";

function TopRestaurant() {
  const resData = useSelector((store) => store.restaurantData.resData);

  const slider = useRef(null);

  const TopRestaurantData = resData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  if (!TopRestaurantData) return null;

  const title = resData[1]?.card?.card?.header?.title;

  function nextSlide() {
    slider.current.scrollLeft += 600;
  }
  function prevSlide() {
    slider.current.scrollLeft -= 600;
  }

  if (resData == null) return null;

  return (
    <div className="w-full md:pt-[75px] sm:pt-[50px] pt-[40px]">
      <div className="lg:w-[82%] w-[95%] mx-auto">
        <div className="flex justify-between">
          <span className="md:text-2xl sm:text-[22px] text-xl font-bold">
            {title}
          </span>
          <div className=" flex gap-3">
            <div
              className="hidden md:flex items-center justify-center hover:bg-[#e5e7e7] hover:text-[#898a8a] hover:cursor-pointer w-[37px] h-[37px] bg-[#D7D8D9] rounded-full"
              onClick={prevSlide}
            >
              <FaArrowLeftLong />
            </div>
            <div
              className="hidden md:flex items-center justify-center hover:bg-[#e5e7e7] hover:text-[#898a8a] hover:cursor-pointer w-[37px] h-[37px] bg-[#D7D8D9] rounded-full"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div
          className="md:pt-[20px] pt-[14px] flex md:gap-6 sm:gap-4 gap-2 overflow-x-scroll scroll-smooth no-scrollBar"
          ref={slider}
        >
          {TopRestaurantData?.map((item) => {
            let finalData = {
              name: item?.info?.name,
              offer: item?.info?.aggregatedDiscountInfoV3?.header,
              offerPartTwo: item?.info?.aggregatedDiscountInfoV3?.subHeader,
              rating: item?.info?.avgRating,
              time: item?.info?.sla?.slaString,
              cuisines: item?.info?.cuisines,
              area: item?.info?.areaName,
              image: swiggyImageDataBase + item?.info?.cloudinaryImageId,
              id: item?.info?.id,
            };
            return (
              <MainCard key={item?.info?.id} {...finalData} varient={"slide"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRestaurant;
