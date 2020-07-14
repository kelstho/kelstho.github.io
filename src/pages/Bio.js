import React from "react";
import Pic from "../assets/images/headshot.png"
import "../assets/css/Bio.css";

function Bio() {
  return (
    <div className="container" id="bio-container">
      <div className="row">
        <h4 className="center-align" id="bio-header">Bio</h4>
      </div>
      <div className="row">
        <div className="col s12 m3 center-align">
          <img src={Pic} alt="Kelly Thompson" className="responsive-img" id="headshot" />
        </div>
        <div className="col s12 m9" id="bio">
          <p>
            Hello there! My name is Kelly Thompson, and I am a former barista living in Southmoreland in Kansas City, Missouri. I recently graduated from the Full Stack Coding Bootcamp at the University of Kansas, and I am very excited to enter the field of Web Development! I love to travel as much as I can (preferably by car, if possible). I’ve been to 37 states (including Alaska) but as far as visiting other countries, I’ve only ever been to Canada. I'm hoping to expand that list soon though!
        </p>
          <p>
            I was born and raised in Lawrence, Kansas. I graduated from Lawrence High School in 2011, and I received a BFA in Photography from the Lesley University College of Art and Design in 2016. I worked in the coffee industry as a barista for my first couple of years here in KC, and am now hoping to secure a job as a Front End Developer. Please feel free to reach out via phone or email to contact me with any questions about my work!
        </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;