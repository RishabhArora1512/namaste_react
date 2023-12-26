import { useState } from "react";

const Search = (props)=>{

    console.log(props.resList);
    // const {resList} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [resList, setResList] = useState(props.resList);
    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearchTerm(e.target.value);
    }
    // const arr = 

    const handleSubmit = (e) =>{
        // console.log(Object.values(resList));
        const filterdList = resList.filter((restaurant) => restaurant.resName.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log("Filtered list is: "+JSON.stringify(filterdList));
        setResList(filterdList);
    }

    return (
        <div className="search">
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default Search;