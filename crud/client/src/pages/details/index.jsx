import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const Details = () => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const getCourseData = async () => {
    const courseData = await axios.get(`http://localhost:8090/course/${id}`);
    setCourse(courseData.data);
  };
  useEffect(() => {
    getCourseData();
  }, []);
  const navigate=useNavigate()
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8090/course/${id}`);
    navigate("/");
  };
  return (
    <>
      <nav className="mainDivv">
          <div className="navDivv">
            <div className="logo">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
                alt="logo"
              />
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
                <div className="loginbtnDiv">
                  <button className="loginbtn">
                    <span className="loginBtnText">Log in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    <div id="detailPage">
      <div className="meainDetail">
        <div className="detailImg">
          <img src={course.image} alt="" />
        </div>
        <div className="detailText">
          <p className="title">{course.title}</p>
          <a href="https://preview.colorlib.com/theme/courses/#">
            {course.name}
          </a>
          <p className="description">{course.description}</p>
          <div className="starts">
            <i className={course.star}></i>
            <i className={course.star}></i>
            <i className={course.star}></i>
            <i className={course.star}></i>
            <i className={course.halfStar}></i>
          </div>
          <div className="reatingAndPrice">
            <p>
              <span>
                {course.reating} {course.count}
              </span>
            </p>
            <h2>{course.price}</h2>
          </div>
          <div className="detailBtnDiv">
            <button
              onClick={() => {
                handleDelete(course._id);
              }}
            >
              Delete Course
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Details;
