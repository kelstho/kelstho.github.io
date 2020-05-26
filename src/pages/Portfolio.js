import React from "react";
import DeployedCard from "../components/DeployedCard";
import NotDeployedCard from "../components/NotDeployedCard";
import projects from "../projects.json";
import gif from "../assets/images/gif_it_to_me.png";
import trail from "../assets/images/trailmix.png";
import weather from "../assets/images/weather.png";
import tracker from "../assets/images/tracker.png";
import cosmo from "../assets/images/cosmologue.png";
import profile from "../assets/images/profile_generator.png";
import "../assets/css/Portfolio.css";

function Portfolio() {
  return (
    <div className="container" id="portfolio-container">
      <div className="row">
        <DeployedCard
          title={projects[0].title}
          image={cosmo}
          description={projects[0].description}
          deployed={projects[0].deployed}
          repo={projects[0].repo}
        />
        <DeployedCard
          title={projects[1].title}
          image={gif}
          description={projects[1].description}
          deployed={projects[1].deployed}
          repo={projects[1].repo}
        />
        <DeployedCard
          title={projects[2].title}
          image={trail}
          description={projects[2].description}
          deployed={projects[2].deployed}
          repo={projects[2].repo}
        />
      </div>
      <div className="row">
        <NotDeployedCard
          title={projects[3].title}
          image={tracker}
          description={projects[3].description}
          repo={projects[3].repo}
        />
        <DeployedCard
          title={projects[4].title}
          image={weather}
          description={projects[4].description}
          deployed={projects[4].deployed}
          repo={projects[4].repo}
        />
        <NotDeployedCard
          title={projects[5].title}
          image={profile}
          description={projects[5].description}
          repo={projects[5].repo}
        />
      </div>
    </div>
  );
}

export default Portfolio;