import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    //fetchData
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2684962&lng=85.8485101&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setResInfo(json.data); 

        // console.log("Json:  "+json);
    };
    return resInfo;
}

export default useRestaurantMenu;