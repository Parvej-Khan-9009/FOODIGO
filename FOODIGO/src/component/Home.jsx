import WhatsOnMind from "./WhatsOnMind";
import TopRestaurant from "./TopRestaurant";
import HomePageBody from "./HomePageBody";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";
import Shimmer from "./Shimmer";
import LocationNotFound from "./LocationNotFound";

function Home() { 
  const cartData = useSelector((store) => store.cart.items);
  const resData = useSelector((store) => store.restaurantData.resData) 
  useFetchRestaurantData();

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData)); 
  });

  useEffect(()=>{
    return ()=> window.scrollTo(0, 0);
  },[])

  if(!resData) return <Shimmer/>

  if(resData == 'swiggy_not_present') return <LocationNotFound/>
  
  return (
    <>
      <WhatsOnMind />
      <TopRestaurant />
      <HomePageBody />
    </>
  );
}

export default Home;