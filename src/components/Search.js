import { useState } from "react";
import styles from "../index.css"

const Search = (props)=>{

    // console.log(props.resList);
    // const {resList} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [resList, setResList] = useState(props.resList);
    const [filteredResList, setFilteredResList] = useState([]);
    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearchTerm(e.target.value);
    }
    // const arr = 

    const handleSubmit = () =>{
        // console.log(Object.values(resList));
        const filterdList = resList.filter((restaurant) => restaurant.resName.toLowerCase() === searchTerm.toLowerCase());
        console.log("Filtered list is: "+JSON.stringify(filterdList));
        setFilteredResList(filterdList);
    }

    return (
        <div className="search m-4 p-4">
            <input className="border border-solid border-black px-2" type="text" value={searchTerm} onChange={handleChange}/>
            <button className="px-4 py-1 bg-green-100 mx-4" onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default Search;