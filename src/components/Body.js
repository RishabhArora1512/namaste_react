
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
import Search from "./Search"


const Body = () => {

//State variable;

    const [resList, setResList] = useState(resObj);
    console.log(resList);
    return (<div className="body">
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
                resList.map((restaurant) => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
            }
            {/* <RestaurantCard resData={resObj[0]}/>
            <RestaurantCard resData={resObj[1]}/> */}
            {/* <RestaurantCard resName = "KFC"/>
            <RestaurantCard resName="Foods"/>
            <RestaurantCard resName= "Subway"/>  
            <RestaurantCard resName="Punjab Grill"/>
            <RestaurantCard resName="Dominos"/>           */}
        </div>
    </div>)
}


export default Body;