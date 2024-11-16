import { createContext, useState, useEffect } from "react";
import { delhiLat, delhiLng, swiggyDelhiApi, swiggyImageDataBase } from "./Constant";


export const restaurantContext = createContext(null)

export const ContextProvider = (props)=>{
    const [resData, setResData] = useState(null);
    const [lat, setLat] = useState(delhiLat);
    const [lng, setLng] = useState(delhiLng);
    const [locationData, setLocationData] = useState('Delhi, India');

    const fetchDelhiApiData = async ()=>{
        const response = await fetch(swiggyDelhiApi);
        const apiData = await response.json(); 

        setResData(apiData?.data?.cards);
    }

    useEffect(()=>{
        fetchDelhiApiData();
    },[])

    return(
        <restaurantContext.Provider value={{resData, setResData, lat, setLat, lng, setLng, locationData, setLocationData, imageDataBase: swiggyImageDataBase}}>
            {props.children}       
        </restaurantContext.Provider>
    )
}