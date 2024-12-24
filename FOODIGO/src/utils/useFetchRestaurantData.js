import { useEffect } from "react";
import { swiggyDelhiApi } from "./Constant";
import { useDispatch } from "react-redux";
import { updateResData } from "./restaurantDataSlice";

function useFetchRestaurantData(){
    const dispatch = useDispatch();

    const fetchData = async ()=>{
        const response = await fetch(swiggyDelhiApi);
        const apiData = await response.json();
        dispatch(updateResData(apiData?.data?.cards))
    }

    useEffect(()=>{
        fetchData();
    },[])
}

export default useFetchRestaurantData;