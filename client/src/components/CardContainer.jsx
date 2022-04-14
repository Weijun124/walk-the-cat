import React, {useState} from "react";

const CardContainer = (props) => {
    console.log("Container: ", props.data);
    // const [featuredRecipe, setFeaturedRecipe] = useState(props.data[0]);

    return (
        <div>
            {/* <p>{props.data[2][1]}</p> */}
        </div>
    )
}

export default CardContainer;