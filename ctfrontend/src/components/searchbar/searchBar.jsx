import React, {useState} from 'react';
import './searchbar.css'

const SearchBar = (props)=>{
    const [search, setSearch] = useState('')
    const onSubmit = () => {
        props.setSearchString({
            searchString: search
        })
    }
    return(
        <div className="searchbar">
            <div className="search-object">
                <input type="text" name="search" id="" value={search} placeholder="Search for video" className="seachbox" onChange={(e)=>{setSearch(e.target.value)}}/> 
                <button>Search</button>
            </div>
        </div>
    )
}
export default SearchBar;