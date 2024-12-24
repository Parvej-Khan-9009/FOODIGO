import { useState, useEffect } from "react";
import { swiggyBaseRestaurantOriginApi } from "./Constant";

function useFetchFoodColleData(lat, lng, resId){

    const [resData, setResData] = useState(null);

    const fetchData = async ()=>{
        const response = await fetch(swiggyBaseRestaurantOriginApi + lat + '&lng=' + lng + '&collection=' + resId);
        let result = await response.json();
        
        result = result.data.cards;

        setResData(result);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return resData;
}
 
export default useFetchFoodColleData; 