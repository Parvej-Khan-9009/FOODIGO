import MainCard from "./MainCard";
import { useContext } from "react";
import { restaurantContext } from "../utils/restaurantContext";

function HomePageBody() {
  const { resData, imageDataBase } = useContext(restaurantContext);
  if (resData == null) return null;

  const mainBodyData =
    resData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  if (resData == "swiggy_not_present" || mainBodyData == undefined) return null;

  const title = resData[2]?.card?.card?.title;

  return (
    <div className="w-full md:pt-[80px] sm:pt-[50px] pt-[30px] pb-14">
      <div className="lg:w-[82%] w-[95%] mx-auto">
        <div className="flex justify-between">
          <span className="md:text-2xl sm:text-[22px] text-xl font-bold">
            {title}
          </span>
        </div>

        <div className="pt-[20px] gap-2 gap-y-7 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:grid-cols-1 justify-items-center ">
          {mainBodyData?.map((item) => {
            let finalData = {
              name: item?.info?.name,
              offer: item?.info?.aggregatedDiscountInfoV3?.header,
              offerPartTwo: item?.info?.aggregatedDiscountInfoV3?.subHeader,
              rating: item?.info?.avgRating,
              time: item?.info?.sla?.slaString,
              cuisines: item?.info?.cuisines,
              area: item?.info?.areaName,
              image: imageDataBase + item.info.cloudinaryImageId,
            };
            return (
              <MainCard
                key={item?.info?.id}
                {...finalData}
                id={item?.info?.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePageBody;
