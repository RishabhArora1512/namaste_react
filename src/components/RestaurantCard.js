import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const styleCard = {
        backgroundColor: "#f0f0f0",
    };

    return (<div className="res-card" style={styleCard}>
        <img className = "res-card-img" src={CARD_IMG_URL} alt="card image" />
        <h3>{resData.resName}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating}⭐</h4>
        <h4>CostForTwo : ₹{resData.costForTwo/100}</h4>
    </div>)
}

export default RestaurantCard;