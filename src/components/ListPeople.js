import React from "react";
import LoadingHOC from "./LoadingHOC";

const ListPeople = props => {
  const { peoplenames } = props;
  return (
    <ul>
      {peoplenames.map(person => (
        <li className="peopleList" key={person.id}>
          {person.name}
        </li>
      ))}
    </ul>
  );
};

export default LoadingHOC(ListPeople);
