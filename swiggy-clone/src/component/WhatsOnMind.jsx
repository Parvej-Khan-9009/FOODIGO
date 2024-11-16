import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useContext, useRef } from "react";
import { restaurantContext } from "../utils/restaurantContext";
import { Link } from "react-router-dom";

function WhatsOnMind() {
  const { resData, imageDataBase } = useContext(restaurantContext);
  let slider = useRef(null);
  if (resData == null) return null;

  const watsOnMindData =
    resData[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  if (resData == "swiggy_not_present" || watsOnMindData == undefined)
    return null;

  function nextSlide() {
    slider.current.scrollLeft += 600;
  }
  function prevSlide() {
    slider.current.scrollLeft -= 600;
  }

  return (
    <div className="w-full md:pt-24 pt-[70px]">
      <div className="lg:w-[82%] w-[95%] mx-auto">
        <div className="flex justify-between">
          <span className="md:text-2xl sm:text-[22px] text-xl font-bold">What's on your mind?</span>
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
          className="flex gap-3 overflow-x-scroll scroll-smooth no-scrollBar"
          ref={slider}
        >
          {watsOnMindData?.map((item) => {
            const path = item?.action?.link?.slice(41);
            return (
              <Link to={"/" + path} key={item?.id}>
                <div className="shrink-0 md:w-[150px] sm:w-[120px] w-[90px] duration-300 cursor-pointer">
                  <img src={imageDataBase + item?.imageId} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatsOnMind;
