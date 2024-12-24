import { IoSearch } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import LocationMenu from "./LocationMenu";

function Header() {
  const [showLoactionMenu, setShowLoactionMenu] = useState(false);
  const { locationData } = useSelector((store) => store.restaurantData);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  function showLoaction() {
    setShowLoactionMenu(true);
  }

  const headerList = [
    {
      item: "Home",
      icon: LiaHomeSolid,
      path: "/",
    },
    {
      item: "Search",
      icon: IoSearch,
      path: "/search",
    },
    {
      item: cartItems.length,
      icon: CgShoppingCart,
      path: "/checkout",
    },
  ];

  return (
    <>
      {showLoactionMenu && (
        <LocationMenu setShowLoactionMenu={setShowLoactionMenu} />
      )}
      <div className="w-full text-[#414449] fixed bg-white z-[5]">
        <div className="w-[95%] mx-auto px-1 lg:px-28 py-2 md:py-3 flex justify-between items-center shadow-[0_5px_27px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex sm:gap-4 gap-2 items-center">
            <div>
              <img
                className="md:w-16 sm:w-14 w-12 w- rounded-lg"
                src="/logo.png"
              />
            </div>
            <div
              className="group flex items-center cursor-pointer"
              onClick={showLoaction}
            >
              <span className="sm:max-w-[200px] max-w-[90px] sm:text-base text-sm xs:text-xs overflow-hidden text-ellipsis text-nowrap">
                {locationData}
              </span>
              <RiArrowDropDownLine
                className="group-hover:text-[#FF0000] "
                size={35}
              />
            </div>
          </div>

          <ul className="flex sm:gap-12 gap-6 items-center font-semibold">
            {headerList.map((data, index) => {
              return (
                <Link key={index} to={data.path}>
                  <li className="group flex items-center gap-2 cursor-pointer">
                    <data.icon className="group-hover:text-[#FF0000] sm:w-6 w-5 sm:h-6 h-5" />
                    <span className="sm:text-base text-sm xs:text-xs">{data.item}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;