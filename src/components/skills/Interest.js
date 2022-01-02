import React, { Component } from "react";
import classes from "./Interest.module.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
        <div className={classes.Interest}>
          <div className={classes.web}>
            <h3>UI Design</h3>
            <p>
              I can design web pages in HTML, CSS mostly and I still to learn
              the actual design tools.{" "}
            </p>
          </div>

          <div className={classes.app}>
            <h3>MERN(Full stack)</h3>
            <p>
              I am a front end developer and build websites using HTML, CSS,
              Javascript, ReactJs.
              <br /> I have also good grasp on Node and NoSQL(MongoDb)
            </p>
          </div>

          <div className={classes.other}>
            <h3>Other's Interest</h3>
            <p>
              I also have interest on backend which I will learn on myself. I
              have done some coding on Python
              <br /> Adobe Photoshop, Adobe Illustrator, MS Office, Scrum are my
              other fields of interest.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
