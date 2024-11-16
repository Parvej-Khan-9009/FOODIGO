import { useState, useEffect } from "react";

function useFoodCollection(lat, lng, resId){

    const [resData, setResData] = useState(null);

    const fetchData = async ()=>{
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=' + lat + '&lng=' + lng + '&collection=' + resId);
        
        let result = await response.json();
        
        result = result.data.cards;

        setResData(result);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return resData;
}

export default useFoodCollection;