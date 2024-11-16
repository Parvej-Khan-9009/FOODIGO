import WhatsOnMind from "./WhatsOnMind";
import TopRestaurant from "./TopRestaurant";
import HomePageBody from "./HomePageBody";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Home() { 
  const cartData = useSelector((store) => store.cart.items);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData)); 
  });

  useEffect(()=>{
    return ()=> window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <WhatsOnMind />
      <TopRestaurant />
      <HomePageBody />
    </>
  );
}

export default Home;