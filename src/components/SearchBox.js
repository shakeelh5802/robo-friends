import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 mb4 ba b--green bg-lightest-blue br-pill" 
        type="search" 
        placeholder="Search Robots" 
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;