import React from "react";
import LoadingHOCplanets from "./LoadingHOCplanets";

const ListPlanets = props => {
  const { planetnames } = props;
  return (
    <ul>
      {planetnames.map(planet => (
        <li className="peopleList" key={planet.id}>
          {planet.name}
        </li>
      ))}
    </ul>
  );
};

export default LoadingHOCplanets(ListPlanets);
