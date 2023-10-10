import React from 'react'
import './searchBox.css'
const SearchBox = ({placeholder,className,searchHandler}) => {
  return (
    <>
       <input type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={searchHandler} />
    </>
  )
}

export default SearchBox