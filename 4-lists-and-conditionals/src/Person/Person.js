import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div>
      <p className="Person" onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
