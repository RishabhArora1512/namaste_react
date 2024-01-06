
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Search from "./Search"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

//State variable;

    const [resList, setResList] = useState(resObj);
    console.log(resList);

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2684962&lng=85.8485101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    //     console.log(json);
    //     setResList(json.data);
    // }

    // Conditional Rendering
    // if(resList.length === 0){
    //     return <Shimmer/>
    // }

    // const {id, avgRating} = resList?.data?.cards[4]?.card?.card?.gridElements?.restaurants?.info;

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Offline currently Vro</h1>

    return resList.length === 0 ? (<Shimmer/>) : (<div className="body">
        <div className="filter">
            <div className="search">
                <Search resList={resList}/>
            </div>
            <button className="filter-btn"
             onClick={()=>{
                const filterdList = resList.filter((restaurant) => restaurant.avgRating > 4);
                setResList(filterdList);
                console.log(filterdList);
             }} 
             > Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                resList.map((restaurant) => <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}><RestaurantCard resData={restaurant}/></Link>)
            }
        </div>
    </div>)
}


export default Body;