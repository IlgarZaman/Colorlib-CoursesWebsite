import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div id="header" style={{ display: visible ? "block" : "none" }}>
      <div className="container">
        <div className="mainDiv">
          <div className="logo">
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
                alt="logo"
              />
            </Link>
          </div>
          <div className="btns">
            <div className="sections">
              <NavLink to="/">Home</NavLink>
              <NavLink>Courses</NavLink>
              <NavLink>About</NavLink>
              <NavLink className="menuHover">
                Blog
                <div className="menu">
                  <ul>
                    <li>Blog</li>
                    <li>Blog Details</li>
                    <li>Element</li>
                    <NavLink to={"/addcourse"}>
                      <li>Add Course</li>
                    </NavLink>
                  </ul>
                </div>
              </NavLink>
              <NavLink>Contact</NavLink>
            </div>
            <div className="btn">
              <button className="joinbtn">
                <span className="joinBtnText">Join</span>
              </button>
              <button className="loginbtn">
                <span className="loginBtnText">Log in</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
