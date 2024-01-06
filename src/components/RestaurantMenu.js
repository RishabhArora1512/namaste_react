import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    // console.log("ResInfo is :", resInfo)
    if(resInfo === null)
        return <Shimmer/>

    const {name, cuisines, costForTwoMessage, locality} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <h4>Location: {locality}</h4>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;