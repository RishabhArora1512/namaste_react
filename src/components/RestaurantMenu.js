import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import styles from "../index.css";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log("ResInfo is :", resInfo)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, locality } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          showItems={index === showIndex && true}
          data={category?.card?.card}
          setShowIndex={() => setShowIndex(index == showIndex ? null : index)}
        />
      ))}
      <h4>{costForTwoMessage}</h4>
      <h4>Location: {locality}</h4>
      {/* <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul> */}
    </div>
  );
};

export default RestaurantMenu;
