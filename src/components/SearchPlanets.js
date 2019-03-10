import React from "react";

const SearchPlanets = props => {
  return (
    <div>
      <input
        className="searchPlanets"
        type="text"
        placeholder="Where in the Galaxy?"
        onChange={props.searchFunc}
      />
    </div>
  );
};

export default SearchPlanets;
