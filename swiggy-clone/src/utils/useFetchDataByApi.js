import { useState, useEffect } from "react";

function useFetchDataByApi(api){

    const [resData, setResData] = useState(null);

    const fetchData = async ()=>{
        const response = await fetch(api);
        let result = await response.json();
        setResData(result);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return resData;
}

export default useFetchDataByApi;