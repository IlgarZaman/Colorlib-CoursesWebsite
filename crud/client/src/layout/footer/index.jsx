import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="mainDiv">
        <div className="footerSection">
          <div className="leftSection">
            <div>
              <NavLink>
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="leftSectionText">
              <p>
                The automated process starts as soon as your clothes go into the
                machine.
              </p>
            </div>
            <div className="leftSectionIcon">
              <div className="icon">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="icon">
                <i className="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          <div className="rightSection">
            <div>
              <h3>Our solutions</h3>
              <ul>
                <li>
                  <NavLink>Design & creatives</NavLink>
                </li>
                <li>
                  <NavLink>Telecommunication</NavLink>
                </li>
                <li>
                  <NavLink>Restaurant</NavLink>
                </li>
                <li>
                  <NavLink>Programing</NavLink>
                </li>
                <li>
                  <NavLink>Architecture</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Support</h3>
              <ul>
                <li>
                  <NavLink>Design & creatives</NavLink>
                </li>
                <li>
                  <NavLink>Telecommunication</NavLink>
                </li>
                <li>
                  <NavLink>Restaurant</NavLink>
                </li>
                <li>
                  <NavLink>Programing</NavLink>
                </li>
                <li>
                  <NavLink>Architecture</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <NavLink>Design & creatives</NavLink>
                </li>
                <li>
                  <NavLink>Telecommunication</NavLink>
                </li>
                <li>
                  <NavLink>Restaurant</NavLink>
                </li>
                <li>
                  <NavLink>Programing</NavLink>
                </li>
                <li>
                  <NavLink>Architecture</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerEnd">
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
