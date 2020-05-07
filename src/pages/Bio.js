import React from "react";
import Pic from "../assets/images/headshot.jpg"

function Bio() {
  return (
    <div className="container">
      <div className="row">
        <img src={Pic} alt="Kelly Thompson" />
      </div>
      <div className="row">
        <p>
          Hello there! My name is Kelly Thompson, and I am a barista living in Waldo in Kansas City, Missouri. I’ve lived here for a little over two years now, and I’m really excited to be learning about coding from the University of Kansas! I love to travel as much as I can (preferably by car, if possible). I’ve been to 37 states (including Alaska) but as far as visiting other countries, I’ve only ever been to Canada. I'm hoping to expand that list soon though!
        </p>
        <p>
          I was born and raised in Lawrence, Kansas. I graduated from Lawrence High School in 2011, and I received a BFA in Photography from the Lesley University College of Art and Design in 2016. Since then, I have been working in the coffee industry as a barista. Coffee is one of my greatest passions, but I’m ready for a major career change and am hoping to be hired as a web developer after my graduation from this boot camp.
        </p>
      </div>
    </div>
  );
}

export default Bio;