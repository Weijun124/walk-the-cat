import React from "react";
import Status from "./Status"

const Card = props => {
  // console.log("Card:", props.id);
  // const [cardId, setCardId] = useState();

  // const onAddCard = e => setCardId(e.target.value);
  // console.log("CardId",cardId);

  return (
    <div className={"item-container"}>
      <Status status={props.status}/>
      {props.data}
    </div>
  )}

export default Card;