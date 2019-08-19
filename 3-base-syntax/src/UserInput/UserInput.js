import React from "react";
import "./UserInput.css";
import { directive } from "@babel/types";

const userInput = props => {
  return <input onChange={props.changed} value={props.currentName} />;
};

export default userInput;
