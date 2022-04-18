import React, { useState } from "react";
import Status from "./Status"
import axios from "axios";

const Card = props => {

  const [toggle, setToggle] = useState(true);
  const [description, setDescription] = useState(props.data);

  const handleEdit = (update) => {
    axios.patch("/item", update);
  }

  return (
    <div className={"item-container"} onDoubleClick={() => { setToggle(false) }}>
      <Status status={props.status} />
      {toggle ? (
        description
      ) : (
        <input type='text' value={description} onChange={(event) => {
          setDescription(event.target.value)
        }} onKeyDown={(event) => {
          if (event.keyCode === 13) {
            const update = {
              description: event.target.value,
              item_id: props.id
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