import React from "react";

const SearchPeople = props => {
  return (
    <div>
      <input
        className="searchPeople"
        type="text"
        placeholder="Find a Comrade"
        onChange={props.searchFunc}
      />
    </div>
  );
};

export default SearchPeople;
