import React from "react";
import "../App.css";

const Status = (props) => {
  return (
    <div className={"status-container"}>
      <div className={props.status ? "status-container-complete" : "status-container-incomplete"}>
      {props.status ? "Complete" : "Incomplete"}
      </div>
    </div>
  );
};

export default Status;
