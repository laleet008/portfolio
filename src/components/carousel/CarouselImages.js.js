import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselImages.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from "react-icons/go";
import { FaArrowCircleDown } from "react-icons/fa";
import { BsArrowDownLeft } from "react-icons/bs";
import Hello from "../images/greetings.jpg";
import Work from "../images/work.jpg";
import explore from "../images/explore.jpg";

import { HashLink as Link } from "react-router-hash-link";

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id="start">
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={3000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt="myImage" />
            <div className={classes.navbar_container}>
              <ul className={classes.sidebar_nav}>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#about" className={classes.links}>
                    About
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#projects" className={classes.links}>
                    Projects
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#interest" className={classes.links}>
                    Interest
                  </Link>
                </li>
              </ul>
            </div>

            <div className={classes.h1}>
              <h1>I'm Lalit</h1>
              <a
                href="https://drive.google.com/file/d/1EsODJ2cPLjqUKiJT9g9gAo1Un5A9WIwu/view?usp=sharing"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Work} alt="myImage" />
            <div className={classes.navbar_container_1}>
              <ul className={classes.sidebar_nav}>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#about" className={classes.links}>
                    About
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#projects" className={classes.links}>
                    Projects
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#interest" className={classes.links}>
                    Interest
                  </Link>
                </li>
              </ul>
            </div>

            <div className={classes.h2}>
              <h1>Some of my</h1>
              <h1>Projects</h1>
              <a
                href="https://github.com/laleet008?tab=repositories"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW PROJECTS <GoProject />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={explore} alt="myImage" />
            <div className={classes.navbar_container_2}>
              <ul className={classes.sidebar_nav}>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#about" className={classes.links}>
                    About
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#projects" className={classes.links}>
                    Projects
                  </Link>
                </li>
                <li className={classes.sidebar_nav_items}>
                  <Link smooth to="/#interest" className={classes.links}>
                    Interest
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.explore}>
              <h1> I Love to be</h1>
              <h1>Connected</h1>
              <a href="/start" rel="opener noreferrer" target="_blank">
                Explore <BsArrowDownLeft />
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
