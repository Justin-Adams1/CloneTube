import React, {useState} from 'react';

const SearchBar = (props)=>{

    const [searchString, getSearchString] = useState("");
    const onSubmit = () => {
        props.getSearchString({
            searchString: searchString
        })
    }

    return(
        <div className="form-group row">
            label className="col-form-label"

        </div>
    )
}
export default SearchBar;