import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex})=>{
    console.log(data);
    // const [showItems, setShowItems] = useState(false); // Uplifting the state to the parent
    const handleClick = ()=>{
        console.log("Clicked");
        setShowIndex();
    }
    return <div>
        {/* ResCategory */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>↕️</span>
            </div>
            {showItems && <ItemList data={data.itemCards}/>}
        </div>
        
    </div>
}

export default RestaurantCategory;