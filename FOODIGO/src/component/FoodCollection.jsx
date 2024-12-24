import MainCard from "./MainCard";
import { swiggyImageDataBase } from "../utils/Constant";
import { useParams } from "react-router-dom"; 
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import useFetchFoodColleData from "../utils/useFetchFoodColleData";

function FoodCollection() {
  let { resId } = useParams(); 
  resId = resId.slice(14);

  const {lat, lng } = useSelector((store) => store.restaurantData);

  let resData = useFetchFoodColleData(lat, lng, resId);
  const cartData = useSelector((store) => store.cart.items);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData));
  });

  if (resData == null) {
    return <Shimmer />;
  }

  const titleData = resData[0];

  resData = resData.slice(3)

  return (
    <div className="w-full lg:pt-28 md:pt-24 pt-[70px] pb-12">
      <div className="lg:w-[82%] w-[95%] mx-auto">
        <h1 className="lg:text-[40px] md:text-[34px] sm:text-[30px] text-[25px] font-bold">
          {titleData?.card?.card?.title}
        </h1>
        <p className="md:text-lg text-base leading-5 mt-2 text-[#848484]">
          {titleData?.card?.card?.description}
        </p>
      </div>

      <div className="lg:w-[82%] w-[95%] mx-auto pt-[25px] ">
        <div>
          <div className="flex justify-between">
            <span className="md:text-2xl sm:text-[22px] text-xl font-bold">
              restaurants to explore
            </span>
          </div>

          <div className="pt-[20px] grid gap-2 gap-y-7 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:grid-cols-1 justify-items-center">
            {resData.map((item) => {
              let finalData = {
                name: item?.card?.card?.info?.name,
                price: item?.card?.card?.info?.aggregatedDiscountInfoV3?.header,
                priceTwo:
                  item?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader,
                rating: item?.card?.card?.info?.avgRating,
                time: item?.card?.card?.info?.sla?.slaString,
                cuisines: item?.card?.card?.info?.cuisines,
                area: item?.card?.card?.info?.areaName,
                image:
                  swiggyImageDataBase +
                  item?.card?.card?.info?.cloudinaryImageId,
              };
              return (
                <MainCard
                  key={item?.card?.card?.info?.id}
                  {...finalData}
                  id={item?.card?.card?.info?.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodCollection;