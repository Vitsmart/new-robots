import React from "react";

const Card1 = (props) => {
    return(
        <div> 
            <img alt='Robots1' src={`https://robohash.org/${props.id}?200x200`} />
        <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        </div>
        </div>
    );

}
export default Card1;