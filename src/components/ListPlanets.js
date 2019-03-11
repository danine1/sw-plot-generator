import React from "react";
import LoadingHOCplanets from "./LoadingHOCplanets";

const ListPlanets = props => {
  const { planetnames } = props;
  return (
    <ul>
      {planetnames.map((planet, i) => (
        <li className="peopleList" key={i}>
          {planet.name}
        </li>
      ))}
    </ul>
  );
};

export default LoadingHOCplanets(ListPlanets);
