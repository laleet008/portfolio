import React, { Component } from "react";
import classes from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            {" "}
            My name is LALIT PURI and I am a final year student, pursuing
            Bachelor of Technology in Computer Science and Engineering from Indo
            Global College, College of Engineering. I have done mini projects on
            JavaScripts and and 6+ React project. I want to learn more on
            front-end so I am doing NextJS which is getting popularity day by
            day and useful to render server side too.{" "}
          </p>
          <p className={classes.br}>
            Although I was doing my Bachelor in India. I always thought coming
            back to Nepal and placed here as I can see Tech companies are
            growing in Nepal. I am looking for good company and want to work and
            learn.
          </p>
          <p className={classes.br}>
            I am also a football fan. Throughout my student life I would like to
            watch it maximum if I got time that makes me biggest admirer of this
            beautiful game.
          </p>

          <p className={classes.br}></p>

          <p className={classes.br}></p>
        </div>
      </div>
    );
  }
}

export default About;
