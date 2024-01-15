import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({data})=>{
    const dispath = useDispatch();

    const handleClick = ()=>{
        //Dispath an action
        dispath(addItem("Momos"));
    }
    // console.log(data);
    return (<div>
        {data.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left">
                <div className="flex justify-between items-center">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>
                            {" "}- ₹{" "}{item.card.info.price/100}</span>

                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div>
                        <button className="border border-black bg-black px-3 text-sm text-white rounded-lg hover:bg-amber-50 hover:text-black" onClick={handleClick}>Add + </button>
                    </div>
                </div>
            </div>
        ))}
    </div>);
}

export default ItemList;