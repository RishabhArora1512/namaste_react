import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import styles from "../index.css";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  //State variable;

  const [resList, setResList] = useState(resObj);
  // console.log(resList);

  // useEffect(()=>{
  //     fetchData();
  // },[]);

  // const fetchData = async ()=>{
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2684962&lng=85.8485101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const json = await data.json();
  //     console.log(json);
  //     setResList(json.data);
  // }

  // // Conditional Rendering
  // if(resList.length === 0){
  //     return <Shimmer/>
  // }

  // const {id, avgRating} = resList?.data?.cards[4]?.card?.card?.gridElements?.restaurants?.info;

  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // const {}

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Offline currently Vro</h1>;

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search flex items-center">
          <Search resList={resList} />
          <div>
            <label>UserName </label>
            <input
              type="text"
              className="border border-black"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-gray-100 mb-2 ml-3"
          onClick={() => {
            const filterdList = resList.filter(
              (restaurant) => restaurant.avgRating > 4
            );
            setResList(filterdList);
            console.log(filterdList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
        <div>{loggedInUser}</div>
        {/* <li className="px-4 font-bold"></li>  */}
      </div>

      <div className="ml-3">
        <div className="res-container flex flex-wrap">
          {resList.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
              {restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
