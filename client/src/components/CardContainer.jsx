import Card from "./Card";
import "../App.css";
import React from "react";
import axios from 'axios';
import{useDrop} from "react-dnd";


const CardContainer = (props) => {

  let cardId;
  const[{isOver},dropfromTodo]=useDrop({
    accept:"task",
    drop:({id})=>{changeStatus(id)},
    collect:(monitor)=>({isOver:!!monitor.isOver()}),
  });

  const columnidswitch = async (update) => {
   await axios.patch("/item123", update);
   props.update()
  }

  const changeStatus=(taskid)=>{

    if(props.data.item_id.includes(taskid)){
      return
    }else{console.log('hjahaha')
      const update = {
        card_id: props.data.id,
        status_label:props.data.status[0],
        item_id: taskid
      }
      columnidswitch(update)
    }
  };

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
        props.update()
      })
      .catch((err) => {
        if (err.response) console.log("server responded:", err.response);
        else if (err.request) console.log("network error");
        else console.log(err);
      })
  }


  return (
    <div className={"card-container"} ref={dropfromTodo}>
      <div className={"card-header"}>
        {props.data.title}
      </div>
      {props.data.description.map((element, index) => (
        <Card id={props.data.item_id[index]} data={element} item_id={props.data.item_id[index]} key={props.data.item_id[index]} status={props.data.status[index]} update={props.update} />
      ))}
    
      <span className="add-item-card">
        <button onClick={onClick} className="add-card">+ Add a card</button>
        <button className="add-template-card"><img src="./pictures/template-icon.png" /></button>
      </span>
    </div>
  );
};

export default CardContainer;
