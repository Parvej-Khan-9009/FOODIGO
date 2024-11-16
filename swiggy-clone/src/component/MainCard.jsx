import { StarLogo } from "../utils/Constant";
import { Link } from "react-router-dom";

function MainCard({ name, offer, offerPartTwo, rating, time, cuisines, area, image, id, varient }) {
  return (
    <>
      <Link to={"/restaurentMenu/" + id}>
        <div
          className={
            varient == "slide"
              ? "md:w-[273px] sm:w-[200px] w-[150px] shrink-0 transform hover:scale-95 cursor-pointer transition-transform"
              : "shadow-[0_2px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl lg:w-[260px] md:w-[237px] w-[190px] xs:w-[300px] shrink-0 transform hover:scale-95 cursor-pointer transition-transform"
          }
        >
          <div
            className={
              varient == "slide" ? "rounded-2xl overflow-hidden relative" : "rounded-t-2xl overflow-hidden relative"
            }
          >
            <img
              className={
                varient == "slide"
                  ? "md:w-[273px] sm:w-[200px] w-[150px] md:h-[182px] sm:h-[150px] h-[130px] object-cover"
                  : "lg:w-[260px] md:w-[237px] w-[190px] xs:w-[300px] h-[182px] object-cover"
              }
              src={image}
            />
            <div className="gredient absolute flex items-end w-full h-full top-0 ">
              <div
                className={
                  varient == "slide"
                    ? "md:text-[22px] sm:text-[18px] text-[16px] text-white pb-1 pl-2 font-extrabold"
                    : "md:text-[22px] text-[18px] xs:text-[22px] text-white pb-1 pl-2 font-extrabold"
                }
              >
                <span>{offer} </span>
                <span>{offerPartTwo}</span>
              </div>
            </div>
          </div>
          <div className="py-[10px] pl-[5px]">
            <p
              className={
                varient == "slide"
                  ? "md:text-[18px] text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                  : "pl-1 text-[18px] font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              }
            >
              {name}
            </p>
            <div className="flex gap-1 items-center">
              <StarLogo/>
              <p
                className={
                  varient == "slide"
                    ? "md:text-[16px] text-[14px] font-medium"
                    : "pl-1 sm:text-[16px] text-[14px] font-medium"
                }
              >
                {rating}•
              </p>
              <p
                className={
                  varient == "slide"
                    ? "md:text-[16px] text-[14px] font-medium"
                    : "pl-1 sm:text-[16px] text-[14px] font-medium"
                }
              >
                {time}
              </p>
            </div>
            <p
              className={
                varient == "slide"
                  ? "md:text-[16px] text-[14px] font-normal text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis"
                  : "pl-1 sm:text-[16px] text-[14px] font-normal text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis"
              }
            >
              {cuisines?.join(", ")}
            </p>
            <p
              className={
                varient == "slide"
                  ? "md:text-[16px] text-[14px] font-normal text-gray-700"
                  : "pl-1 sm:text-[16px] text-[14px] font-normal text-gray-700"
              }
            >
              {area}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MainCard;
