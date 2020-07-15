import React from "react";
import Icon from "../components/Icon";
import Pic from "../assets/images/headshot.png";
import html5 from "../assets/icons/html5.png";
import css3 from "../assets/icons/css3.png";
import js from "../assets/icons/javascript.png";
import reactimage from "../assets/icons/react.png";
import handlebars from "../assets/icons/handlebars.png";
import bootstrap from "../assets/icons/bootstrap.png";
import materialize from "../assets/icons/materialize.png";
import materialui from "../assets/icons/materialui.png";
import sql from "../assets/icons/sql.png";
import mongodb from "../assets/icons/mongodb.png";
import node from "../assets/icons/node.png";
import jquery from "../assets/icons/jquery.png";
import adobe from "../assets/icons/adobe.png";
import msoffice from "../assets/icons/msoffice.png";
import vscode from "../assets/icons/vscode.png";
import mysql from "../assets/icons/mysql.png";
import robo3t from "../assets/icons/robo3t.png";
import postman from "../assets/icons/postman.png";
import "../assets/css/Bio.css";

function Bio() {
  return (
    <div className="container" id="bio-container">
      <div className="row">
        <h4 className="center-align section-header">Bio</h4>
      </div>
      <div className="row">
        <div className="col s12 m3 center-align">
          <img src={Pic} alt="Kelly Thompson" className="responsive-img" id="headshot" />
        </div>
        <div className="col s12 m9 content">
          <p>
            Hello there! My name is Kelly Thompson, and I am a former barista living in Southmoreland in Kansas City, Missouri. I recently graduated from the Full Stack Coding Bootcamp at the University of Kansas, and I am very excited to enter the field of Web Development! I love to travel as much as I can (preferably by car, if possible). I’ve been to 37 states (including Alaska) but as far as visiting other countries, I’ve only ever been to Canada. I'm hoping to expand that list soon though!
        </p>
          <p>
            I was born and raised in Lawrence, Kansas. I graduated from Lawrence High School in 2011, and I received a BFA in Photography from the Lesley University College of Art and Design in 2016. I worked in the coffee industry as a barista for my first couple of years here in KC, and am now hoping to secure a job as a Front End Developer. Please feel free to reach out via phone or email to contact me with any questions about my work!
        </p>
        </div>
      </div>
      <div className="row">
        <h4 className="center-align section-header">Skills</h4>
      </div>
      <div className="row center-align">
        <div className="row">
          <b>Languages/Libraries</b>
        </div>
        <div className="row">
          <Icon
            title="HTML5"
            image={html5}
          />
          <Icon
            title="CSS3"
            image={css3}
          />
          <Icon
            title="JavaScript"
            image={js}
          />
          <Icon
            title="React"
            image={reactimage}
          />
          <Icon
            title="Handlebars.js"
            image={handlebars}
          />
          <Icon
            title="Bootstrap 4"
            image={bootstrap}
          />
        </div>
        <div className="row">
          <Icon
            title="Materialize CSS"
            image={materialize}
          />
          <Icon
            title="Material UI"
            image={materialui}
          />
          <Icon
            title="SQL"
            image={sql}
          />
          <Icon
            title="MongoDB"
            image={mongodb}
          />
          <Icon
            title="Node.js"
            image={node}
          />
          <Icon
            title="jQuery"
            image={jquery}
          />
        </div>
      </div>
      <div className="row center-align">
        <div className="row">
          <b>Applications</b>
        </div>
        <div className="row">
          <Icon
            title="Adobe Suite"
            image={adobe}
          />
          <Icon
            title="VS Code"
            image={vscode}
          />
          <Icon
            title="MySQL Workbench"
            image={mysql}
          />
          <Icon
            title="Robo 3T"
            image={robo3t}
          />
          <Icon
            title="Postman"
            image={postman}
          />
          <Icon
            title="MS Office"
            image={msoffice}
          />
        </div>
      </div>
    </div>
  );
}

export default Bio;