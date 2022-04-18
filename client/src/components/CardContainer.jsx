import Card from "./Card";
import "../App.css";


const CardContainer = (props) => {
  return (
    <div className={"card-container"}>
      <div className={"card-header"}>
        {props.data.title}
      </div>
      {props.data.description.map((element, index) => (
        <Card data={element} id={props.data.item_id[index]} key={props.data.item_id[index]} status={props.data.status[index]} />
      ))}
    </div>
  );
};

export default CardContainer;
