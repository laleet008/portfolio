import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import logo from "../images/profile.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <h1>
          <Link smooth to="/start" className="h1_links">
            Laleet Puree
          </Link>
        </h1>
        <p className="gmail">
          <MdEmail className="detail-icon" /> laleetpuree5768@gmail.com{" "}
        </p>
        <p className="address">
          <FaMapMarkerAlt className="detail-icon" />
          Kathmandu, Nepal
        </p>
        <p>
          <FaPhone className="detail-icon" /> +977 9805744163 <br />
          <FaPhone className="detail-icon" /> +91 8368061662
        </p>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/lalit-puri-b5aa33193/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/laleet008"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-github fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://twitter.com/LalitPuri08"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-twitter fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.instagram.com/laleet_iam8/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-instagram fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:laleetpuree5768@gmail.com?subject=Testing out mailto!"
                rel="opener noreferrer"
                target="_top"
                className="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.facebook.com/laleetpuree"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-facebook fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
