import React from 'react';

const SearchBox = ({value, onSearch}) => {
    return (
        <div className="input-group mb-3">
            <input 
            type="text"
            name="query"
            className="form-control my-3" 
            placeholder="Search..."
            value={value}
            onChange={e => onSearch(e.currentTarget.value)} 
            />
        </div>
    );
}

export default SearchBox;