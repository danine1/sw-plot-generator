import React from "react";
import LoadingHOC from "./LoadingHOC";

const ListPeople = props => {
  const { peoplenames } = props;
  return (
    <ul>
      {peoplenames.map((person, i) => (
        <li className="peopleList" key={i}>
          {person.name}
        </li>
      ))}
    </ul>
  );
};

export default LoadingHOC(ListPeople);
