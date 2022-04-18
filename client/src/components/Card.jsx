import React from "react";
import Status from "./Status"

const Card = props => {
  return (
    <div className={"item-container"}>
      <Status status={props.status}/>
      {props.data}
    </div>
  )}

export default Card;