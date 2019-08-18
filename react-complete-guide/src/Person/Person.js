import React from "react";
import { directive } from "@babel/types";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
