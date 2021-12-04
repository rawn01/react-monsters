import React from "react";

import "./Search.css";

const Search = (props) => {
  return (
    <input
      type="search"
      value={props.searchString}
      onChange={props.handleOnChange}
      className="search"
      placeholder={props.placeholder}
    />
  );
}

export default Search;
