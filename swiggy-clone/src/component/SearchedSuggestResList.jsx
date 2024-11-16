import { useEffect, useState, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { searchSuggetionImageDatabase } from "../utils/Constant";
import { restaurantContext } from "../utils/restaurantContext";
import { SearchLoading } from "../utils/Constant";
import { RxCross2 } from "react-icons/rx";
import SearchedResList from "./SearchedResList";
import { Link } from "react-router-dom";

function SearchedSuggestResList() {
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [suggetionData, setSuggetionData] = useState(null);
  const { lat, lng } = useContext(restaurantContext);
  const [searchKey, setSearchKey] = useState("");

  const sessionResRecord = JSON.parse(sessionStorage.getItem("SearchedResList"));
  const [restaurantList, setRestaurantList] = sessionResRecord ? useState(sessionResRecord) : useState(null);

  const sessionSearchRecord = sessionStorage.getItem("sessionSearchChar");
  
  function sessionDataSet() {
    sessionStorage.setItem("SearchedResList", JSON.stringify(restaurantList));
    const keepSearchedChar =  sessionSearchRecord ? sessionSearchRecord : searchKey;
    sessionStorage.setItem("sessionSearchChar", keepSearchedChar);
  }

  async function loadRestaurent(query) {
    const searchString = query.substring(query.indexOf("=") + 1, query.indexOf("&"));
    setSuggetionData(null);
    setLoad(true);
    const metaData = query.substring(query.indexOf("metadata=") + 9);

    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=" +
        lat +
        "&lng=" +
        lng +
        "&str=" +
        searchString +
        "&trackingId=undefined&submitAction=SUGGESTION&metaData=" +
        metaData
    );
    const res = await response.json();
    let resListData =
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    setRestaurantList(resListData);
    setLoad(false);
  }

  function clearSearch() {
    setSearchKey("");
  }

  async function loadLiveSuggetion() {
    setLoad(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=" +
        lat +
        "&lng=" +
        lng +
        "&str=" +
        searchKey +
        "&trackingId=undefined&includeIMItem=true"
    );
    const json = await response.json();
    if (json?.data?.suggestions.length != 0) {
      setSuggetionData(json?.data?.suggestions);
    } else {
      setSuggetionData(null);
      setNotFound(true);
    }
    setLoad(false);
  }

  useEffect(() => {
    let time;
    setNotFound(false);
    setSuggetionData(null);
    if (searchKey?.length >= 2) {
      time = setTimeout(() => {
        setSuggetionData(null);
        loadLiveSuggetion();
      }, 500);
    } 

    return () => {
        clearTimeout(time);
        setRestaurantList(null);
    }
  }, [searchKey]);

  useEffect(()=>{
    sessionStorage.removeItem('SearchedResList');
    sessionStorage.removeItem('sessionSearchChar');
  },[])

  return (
    <div className="w-full">
      <div className="xl:w-[70%] lg:w-[75%] md:w-[92%] w-[95%] xs:w-[95%] mx-auto">
        <div className="xl:w-[70%] lg:w-[75%] md:w-[92%] w-[95%] xs:w-[95%] bg-white lg:pt-32 md:pt-24 pt-[70px] xs:pt-[65px] lg:pb-6 pb-4 fixed z-[1]">
          <div className="w-full relative">
            <input
              className="bg-white w-full pl-5 pr-12 sm:py-3 py-2 xs:py-[6px] sm:text-base text-sm border-[1px] outline-none shadow-lg border-[#D4D5D9] placeholder:font-semibold placeholder:text-[#858585]"
              type="text"
              placeholder="Search for restaurants and food"
              value={searchKey != "" ? searchKey : sessionSearchRecord ? sessionSearchRecord : searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            {searchKey?.length == 0 ? (
              <IoSearch size={23} className="absolute sm:top-[28%] top-[23%] xs:top-[20%] right-[1%] xs:w-[20px] xs:h-[20px]" />
            ) : (
              <RxCross2
                size={23}
                className="absolute sm:top-[28%] top-[23%] xs:top-[20%] right-[1%] cursor-pointer xs:w-[20px] xs:h-[20px]"
                onClick={clearSearch}
              />
            )}
          </div>
        </div>
        <div className="w-[95%] mx-auto lg:pt-48 md:pt-40 pt-32 xs:pt-[120px]">
          {suggetionData?.length != null &&
            suggetionData?.map((item, index) => {
              if (item?.type != "DISH") {
                return (
                  <div
                    key={index}
                    className="w-full flex gap-4 items-center sm:py-4 py-2 cursor-pointer hover:bg-[#F2F6FC]"
                    onClick={() => {
                      loadRestaurent(item?.cta?.link);
                    }}
                  >
                    <img
                      className="w-[70px] rounded-md"
                      src={searchSuggetionImageDatabase + item?.cloudinaryId}
                    />
                    <div>
                      <h1 className="text-sm">{item?.text}</h1>
                      <span className=" text-[13px] text-[#686B78]">
                        {item?.type}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {load && (
          <div className="flex justify-center pt-24">
            <SearchLoading />
          </div>
        )}
        {notFound == true && load == false && (
          <div className="flex justify-center pt-24">
            <h1 className="sm:text-3xl text-xl font-bold text-gray-700">Not Found !</h1>
          </div>
        )}

        <div className="w-full mx-auto bg-[#F5F6F8] sm:pt-0 ">
          <div className="grid items-center md:grid-cols-2 grid-cols-1 md:gap-4">
            {restaurantList?.length != null &&
              restaurantList?.map((item, index) => {
                if (item?.card?.card?.info) {
                  let finalData = {
                    resImg: item?.card?.card?.info?.cloudinaryImageId,
                    offerData1: item?.card?.card?.info?.aggregatedDiscountInfoV3?.header,
                    offerData2: item?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader,
                    resName: item?.card?.card?.info?.name,
                    rating: item?.card?.card?.info?.avgRatingString,
                    time: item?.card?.card?.info?.sla?.slaString,
                    forTwo: item?.card?.card?.info?.costForTwoMessage,
                    cuisines: item?.card?.card?.info?.cuisines,
                  };
                  return (
                    <Link
                      to={"/restaurentMenu/" + item?.card?.card?.info?.id}
                      key={index}
                      onClick={sessionDataSet}
                    >
                      <SearchedResList {...finalData} />
                    </Link>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedSuggestResList;