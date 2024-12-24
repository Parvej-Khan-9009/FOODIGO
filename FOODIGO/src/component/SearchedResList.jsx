import { searchedRestaurantImage } from "../utils/Constant";

function SearchedResList({ resImg, offerData1, offerData2, resName, rating, time, forTwo, cuisines}) {
  return (
    <>
      <div className="flex items-center md:justify-center gap-4 bg-white-500 px-2 sm:pt-6 pt-3">
        <div className="relative w-[88px]">
          <img
            className="w-[88px] h-[96px] rounded-xl"
            src={searchedRestaurantImage + resImg}
          />

          <div className="w-[75%] absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-white rounded-sm shadow-[rgba(0,0,15,0.5)_0px_2px_7px_0px]">
            <div className="text-[0.85rem] font-extrabold text-[#FF6A13] text-center uppercase">
              {offerData1}
            </div>
            <div className="text-[8px] font-bold text-[#FF6A13] text-center uppercase">
              {offerData2}
            </div>
          </div> 
        </div>
 
        <div className="w-[73%]">
          <span className="text-base xs:text-sm font-semibold text-[#3e4152]">
            {resName}
          </span>
          <div className="text-[#3e4152] font-medium text-[13px] xs:text-[11px]">
            <span>{rating} • </span>
            <span>{time} • </span>
            <span>{forTwo}</span>
          </div>
          <p className="text-[#93959f] text-[15px] xs:text-[13px] pt-[2px] leading-5 xs:leading-4">
            {cuisines?.join(', ')}
          </p>
        </div>
      </div>
    </>
  );
}

export default SearchedResList;
