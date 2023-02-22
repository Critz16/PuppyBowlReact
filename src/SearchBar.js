import React, { useState } from 'react';


const SearchBar = () => {

    const [ searchForm, setSearchForm ] = useState('')
    return (
        <div>
            <form>
                <input type="text" placeholder="Search" value={searchForm}
                onChange={(event) => setSearchForm(event.target.value)}
                />
            </form>
        </div>
    )
}



export default SearchBar