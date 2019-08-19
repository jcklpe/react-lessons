import React from "react";
import "./UserOutput.css";
import { directive } from "@babel/types";

const userOutput = props => {
  return (
    <div>
      <p>{props.username}</p>
      <p>second</p>
    </div>
  );
};

export default userOutput;
