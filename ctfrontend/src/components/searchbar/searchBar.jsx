import React, {useState} from 'react';
import './searchbar.css'

const SearchBar = (props)=>{
    const [search, setSearch] = useState('')
    const handleChange= (event)=>{
        setSearch(event.target.value)
        
    }   

    const handleClick = (search)=>{
        props.setSearchString(search)
    }
     return(
        <div className="searchbar">
            <div className="search-object">
                <input type="text" name="search" id="" value={search} placeholder="Search for video" className="seachbox" onChange={handleChange}/> 
                <button onClick={handleClick(search)}>Search</button>
            </div>
        </div>
    )
}
export default SearchBar;