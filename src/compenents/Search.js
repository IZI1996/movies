import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [query,setQuery]=useState('')
    const handleSearch = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value); // تمرير القيم للأب
      };
  return (

    <div>
         <input
      type="text"
      placeholder="ابحث هنا..."
      value={query}
      onChange={handleSearch}
    />
    </div>
  )
}

export default Search
