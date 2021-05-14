import React, {useState} from 'react';

const SearchBar = (props)=>{
    const [search, setSearch] = useState('')
    const onSubmit = () => {
        props.setSearchString({
            searchString: search
        })
    }
    return(
        <div className="form-group row">
            <input type="text" name="" id="" onChange={(e)=>{setSearch(e.target.value)}}/> 
            <input type="submit" name="" id="" onClick={onSubmit()}/>  
        </div>
    )
}
export default SearchBar;