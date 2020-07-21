import React from "react";
import "../assets/css/Icon.css";

function Icon(props) {
  return (
    <div className="col s6 l2">
      <div className="row image-row">
        <img className="icon-image" alt={props.title} src={props.image} />
      </div>
      <div className="row icon-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Icon;