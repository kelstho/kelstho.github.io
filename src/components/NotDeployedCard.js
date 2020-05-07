import React from "react";

function NotDeployedCard(props) {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="card-content">
          <h5>{props.title}</h5>
          <p>
            {props.description}
          </p>
        </div>
        <div className="card-action">
          <a href={props.repo} target="_blank" rel="noreferrer noopener">Github Repo</a>
        </div>
      </div>
    </div>
  );
}

export default NotDeployedCard;