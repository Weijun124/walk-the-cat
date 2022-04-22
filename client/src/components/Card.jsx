import React, { useState } from "react";
import Status from "./Status"
import axios from "axios";
import DeleteCard from './Delete';
import{useDrag} from "react-dnd";
const Card = props => {
  const {id}=props;


  const [toggle, setToggle] = useState(true);
  const [description, setDescription] = useState(props.data);

  const handleEdit = (update) => {
    axios.patch("/item", update);
  }
  const[{isDragging},dragRef]=useDrag({
    type:'task',
    item:{id},
    collect:(monitor)=>({
        isDragging:monitor.isDragging(),
    }),
});

  return (
    <div className={"item-container"} onDoubleClick={() => { setToggle(false) }}
    ref={dragRef}>
      <Status status={props.status} />
      <div className="task-container">
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
        <DeleteCard className="delete-card" item_id={props.item_id} update={props.update} />
      </div>
    </div>
  )
}

export default Card;