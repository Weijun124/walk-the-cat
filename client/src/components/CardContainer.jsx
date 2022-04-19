import Card from "./Card";
import "../App.css";
import React, { useState } from "react";
import axios from 'axios';


const CardContainer = (props) => {
  // console.log("CardContainer:",props.data);
  let cardId;

  const onClick = (e) => {
    cardId = props.data.id;
    createCard();
  }

  const createCard = () => {
    axios.post("/item", {
      card_id: cardId,
      description: "Double click to add task",
      status_label: (cardId === 1) ? false : true
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      if (err.response) console.log("server responded:", err.response);
      else if (err.request) console.log("network error");
      else console.log(err);
    })
  }


  return (
    <div className={"card-container"}>
      <div className={"card-header"}>
        {props.data.title}
      </div>
      {props.data.description.map((element, index) => (
        <Card id={props.data.id} data={element} item_id={props.data.item_id[index]} key={props.data.item_id[index]} status={props.data.status[index]} />
      ))} 
      <span className="add-item-card">
        <button onClick={onClick} className="add-card">+ Add a card</button>
        <button className="add-template-card"><img src="./pictures/template-icon.png"/></button>
      </span>
    </div>
  );
};

export default CardContainer;
