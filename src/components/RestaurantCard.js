import { CARD_IMG_URL } from "../utils/constants";
import styles from "../index.css"

const RestaurantCard = (props) =>{
    const {resData} = props;

    const styleCard = {
        backgroundColor: "#f0f0f0",
    };

    return (<div className="res-card mr-8 border border-solid border-black hover:shadow-lg" style={styleCard}>
        <img className = "res-card-img" src={CARD_IMG_URL} alt="card image" />
        <h3 className="font-bold text-lg py-2">{resData.resName}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating}⭐</h4>
        <h4>CostForTwo : ₹{resData.costForTwo/100}</h4>
    </div>)
}


export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;