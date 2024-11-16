import { useEffect, useState, useContext } from "react";
import { GoLocation } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdLocationOff } from "react-icons/md";
import { Loading } from "../utils/Constant";
import { restaurantContext } from "../utils/restaurantContext";
import { useNavigate } from "react-router-dom";

function LocationMenu({ setShowLoactionMenu }) {
  const [visible, setVisible] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [load, setLoad] = useState(false);
  const [resultedData, setResultedData] = useState(null);
  const { setResData, setLat, setLng, setLocationData } = useContext(restaurantContext);

  const navigate = useNavigate();

  function hideLoactionMenu() {
    setVisible(false);
    setTimeout(() => {
      setShowLoactionMenu(false);
    }, 150);
  }
  function clearSearchBox (){
    setSearchKey("");
  }

  async function fetchDataByArea(lat, lng) {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=' + lat + '&lng=' + lng + '&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await response.json();
    if(json?.data?.cards[0]?.card?.card?.id == 'swiggy_not_present'){
      setResData('swiggy_not_present');
    } else {
      setResData(json?.data?.cards)
      setLat(lat);
      setLng(lng);
    }
  }

  async function fetchDataOfAreas(placeId) {
    const response = await fetch('https://www.swiggy.com/dapi/misc/address-recommend?place_id=' + placeId);
    const json = await response.json();    
    setLocationData(json?.data[0]?.formatted_address);
    fetchDataByArea(json?.data[0]?.geometry?.location?.lat, json?.data[0]?.geometry?.location?.lng)
  }
  
  function loadAreaData(placeId){
    hideLoactionMenu();
    navigate("/")
    setResData(null);
    fetchDataOfAreas(placeId);
  }

  async function fetchDataByKey() {
    setLoad(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/misc/place-autocomplete?input=" +
        searchKey
    );
    const json = await response.json();
    setLoad(false);
    if (json?.data?.length != 0) {
      setResultedData(json?.data);
    } else {
      setResultedData(null);
      setNotFound(true);
    }
  }
  useEffect(()=>{
    setVisible(true);
  },[]);

  useEffect(() => {
    let time;
    setNotFound(false);
    if (searchKey.length >= 3) {
      time = setTimeout(() => {
        setResultedData(null);
        fetchDataByKey();
      }, 200);
    } else {
      setResultedData(null);
      setLoad(false);
    }

    return () => clearTimeout(time);
  }, [searchKey]);

  return (
    <div
      className="fixed z-10 left-0 w-full h-screen bg-[rgb(0,0,0,0.5)] overflow-hidden"
      onClick={hideLoactionMenu}
    >
      <div
        className={` absolute xl:w-[37%] lg:w-[43%] md:w-[50%] sm:w-[70%] w-[80%] xs:w-[90%] h-screen bg-white duration-200 overflow-hidden overflow-y-scroll ${
          visible ? "left-0" : "left-[-40%]"
        } `}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="lg:w-[65%] sm:w-[85%] w-[90%] xs:w-[95%] mx-auto md:mt-7 mt-3 xs:mt-2">
          <div>
            <RxCross2
              className="cursor-pointer"
              onClick={hideLoactionMenu}
              size={24}
            />
          </div>
          <div className="md:mt-7 mt-5 xs:mt-3 relative">
            <input
              className="md:text-base text-sm bg-white w-full pl-3 pr-16 md:py-3 py-2 border-[1px] outline-none shadow-lg border-[#D4D5D9]"
              type="text"
              placeholder="Search for area, Street Name"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            {searchKey.length != 0 && (
              <span 
                className="cursor-pointer absolute md:top-[33%] top-[30%] right-[3%] md:text-sm text-xs text-[#ff5200] font-medium" 
                onClick={ clearSearchBox }
              >
                Cancel
              </span>
            )}
          </div>
          <div className="w-[93%] mx-auto pt-2">
            {resultedData != null &&
              resultedData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group flex gap-3 pt-5 xs:pt-3 cursor-pointer"
                    onClick={ () => loadAreaData(item?.place_id) }
                  >
                    <div>
                      <GoLocation className="mt-[2px]" size={18} />
                    </div>
                    <div className="w-[90%] border-b-[1px] pb-5 border-black border-dashed">
                      <h3 className="md:text-base text-sm text-[#282c3f] font-medium group-hover:text-[#FF0000]">
                        {item?.structured_formatting?.main_text}
                      </h3>
                      <p className="md:text-[13px] text-[12px] text-[#93959f] pt-[5px]">
                        {item?.structured_formatting?.secondary_text}
                      </p>
                    </div>
                  </div>
                );
              })}

            {load && (
              <div className="pt-14 flex justify-center">
                <Loading />
              </div>
            )}

            {searchKey?.length >= 3 && notFound == true && load == false && (
              <div className="flex justify-center pt-10">
                <div>
                  <div className="flex justify-center">
                    <MdLocationOff className="sm:w-10 w-12 sm:h-10 h-12" />
                  </div>
                  <h1 className="pt-5 sm:text-xl text-lg font-semibold text-gray-700 ">
                    No Result
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationMenu;
