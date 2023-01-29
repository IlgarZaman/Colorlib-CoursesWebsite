import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  image: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});
const AddCourse = () => {
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
      <div id="addCourse">
        <div className="mainDiv">
          <div className="centerDiv">
            <Formik
              initialValues={{
                image: "",
                title: "",
                name: "",
                description: "",
                star: "fas fa-star",
                halfStar: "fas fa-star-half",
                reating: "(4.5)",
                count: "based on 120",
                price: "",
                buttonText: "Find out more",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                axios.post(`http://localhost:8090/course`, values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <h1>Add Own Course!</h1>
                  <div className="inputandlabelmain">
                    <div className="inputandlabel">
                      <label htmlFor="image">Image URL:</label>
                      <br />
                      <Field name="image" />
                      {errors.image && touched.image ? (
                        <div className="error">{errors.image}</div>
                      ) : null}
                    </div>
                    <div className="inputandlabel">
                      <label htmlFor="name">Own Course Name:</label>
                      <br />
                      <Field name="name" />
                      {errors.name && touched.name ? (
                        <div className="error">{errors.name}</div>
                      ) : null}
                    </div>
                    <div className="inputandlabel">
                      <label htmlFor="title">Own Course Title:</label>
                      <br />

                      <Field name="title" />
                      {errors.title && touched.title ? (
                        <div className="error">{errors.title}</div>
                      ) : null}
                    </div>
                    <div className="inputandlabel">
                      <label htmlFor="description">
                        Own Course Description:
                      </label>
                      <br />

                      <Field name="description" />
                      {errors.description && touched.description ? (
                        <div className="error">{errors.description}</div>
                      ) : null}
                    </div>
                    <div className="inputandlabel">
                      <label htmlFor="price">Own Course Price:</label>
                      <br />

                      <Field name="price" />
                      {errors.price && touched.price ? (
                        <div className="error">{errors.price}</div>
                      ) : null}
                    </div>
                    <div className="btn">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
