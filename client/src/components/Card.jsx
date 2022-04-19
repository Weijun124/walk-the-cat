import React, { useState } from "react";
import Status from "./Status"
import axios from "axios";
import DeleteCard from './Delete';
const Card = props => {

  const [toggle, setToggle] = useState(true);
  const [description, setDescription] = useState(props.data);

  const handleEdit = (update) => {
    axios.patch("/item", update);
  }
  console.log(props)
  return (
    <div className={"item-container"} onDoubleClick={() => { setToggle(false) }}>
      <Status status={props.status} />
      <DeleteCard item_id={props.item_id} />
      {toggle ? (
        description
      ) : (
        <input className="task-input" type='text' value={description} onChange={(event) => {
          setDescription(event.target.value)
        }} onKeyDown={(event) => {
          if (event.keyCode === 13) {
            const update = {
              description: event.target.value,
              item_id: props.item_id
            }
            handleEdit(update)
            setToggle(true)
          }
        }} />
      )
      }
    </div>
  )
}

export default Card;