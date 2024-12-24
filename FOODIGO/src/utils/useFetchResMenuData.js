import { useState, useEffect } from "react";

function useFetchResMenuData(api, id){
    const [menuData, setMenuData] = useState(null);

    const fetchData = async ()=>{
        const response = await fetch(api + id);
        
        let result = await response.json();
        setMenuData(result);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return menuData;
}

export default useFetchResMenuData; 