import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { swiggyImageDataBase } from "../utils/Constant";

function WhatsOnMind() {
  const resData = useSelector((store) => store.restaurantData.resData);
  let slider = useRef(null);

  let watsOnMindData = resData[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  if (!watsOnMindData) return null;

  watsOnMindData = watsOnMindData.slice(2);

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
                  <img src={swiggyImageDataBase + item?.imageId} alt="" />
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
