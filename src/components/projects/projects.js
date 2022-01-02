import React, { Component } from "react";
import classes from "./Projects.module.css";
// import blogSport from "../images/proj3.jpg";
import projects from "../../api/projects";

class Projects extends Component {
  render() {
    return (
      <div className={classes.box} id="projects">
        <span className={classes.head}> PROJECTS</span>
        <h2 className={classes.heading}>SOME OF MY PROJECTS</h2>

        <div className={classes.project_container}>
          {projects.map((cureElem) => {
            const { id, image, title, description, date } = cureElem;
            return (
              <div className={classes.container} key={id}>
                <div className={classes.project}>
                  <img src={image} alt="projectImage" />
                  <div className={classes.content}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p className={classes.date}>Completed: {date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
