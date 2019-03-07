import React from "react";

const SearchPeople = props => {
  return (
    <div>
      <input
        className="searchPeople"
        type="text"
        placeholder="search people"
        onChange={props.searchFunc}
      />
    </div>
  );
};

export default SearchPeople;
