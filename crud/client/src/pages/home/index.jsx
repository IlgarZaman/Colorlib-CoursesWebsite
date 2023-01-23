import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import axios from "axios";
const Home = () => {
  const [course, setCourse] = useState([]);
  const [experts, setExperts] = useState([]);
  const getCourseData = async () => {
    const courseData = await axios.get(`http://localhost:8090/course`);
    setCourse(courseData.data);
  };
  const getExpertsData = async () => {
    const expertsData = await axios.get(`http://localhost:8080/experts`);
    setExperts(expertsData.data);
  };
  useEffect(() => {
    getCourseData();
    getExpertsData();
  }, []);

  return (
    <div id="home">
      <div className="homeMainDiv">
        <nav className="mainDiv">
          <div className="navDiv">
            <div className="logo">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
                alt="logo"
              />
            </div>
            <div className="btns">
              <div className="sections">
                <NavLink>Home</NavLink>
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

        <div className="descriptionMainDiv">
          <div className="description">
            <h1>Online learning platform</h1>
            <p>
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies
            </p>
            <button className="joinForFreeBtn">
              <span className="joinForFreeBtnText">Join for free</span>
            </button>
          </div>
        </div>
        <div className="stickerCards">
          <div className="stickerCard">
            <div className="icon">
              <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg" />
            </div>
            <div className="text">
              <h3>60+ UX courses</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="stickerCard">
            <div className="icon">
              <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg" />
            </div>
            <div className="text">
              <h3>Expert instructors</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="stickerCard">
            <div className="icon">
              <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg" />
            </div>
            <div className="text">
              <h3>Life time access</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
        </div>
        <div className="caruselStart">
          <h2>Our featured courses</h2>
        </div>
        <div className="caruselMainDiv">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {course.map((e) => {
              return (
                <SwiperSlide className="swiperSlide">
                  <Link to={`details/${e._id}`} key={e._id} className="link">
                  <div className="mainSwiper">
                    <div className="swiperImg">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="swiperText">
                      <p className="title">{e.title}</p>
                      <a href="https://preview.colorlib.com/theme/courses/#">
                        {e.name}
                      </a>
                      <p className="description">{e.description}</p>
                      <div className="bottomTextSection">
                        <div className="starts">
                          <i className={e.star}></i>
                          <i className={e.star}></i>
                          <i className={e.star}></i>
                          <i className={e.star}></i>
                          <i className={e.halfStar}></i>
                        </div>
                        <div className="reatingAndPrice">
                          <p>
                            <span>
                              {e.reating} {e.count}
                            </span>
                          </p>
                          <h2>{e.price}</h2>
                        </div>
                      </div>
                      <div className="swiperBtnDiv">
                        <button>{e.buttonText}</button>
                      </div>
                    </div>
                  </div>
                </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="learnNewSkils">
          <div className="aboutIcon">
            <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/about.svg" />
          </div>
          <div className="flexDiv">
            <div className="aboutText">
              <h2>Learn new skills online with top educators</h2>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <div className="iconAndText">
                <div className="icon">
                  <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
                  <img
                    src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                    className="icontwo"
                  />
                  <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
                </div>
                <div className="text">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                  <p>
                    Join millions of people from around the world learning
                    together. Online learning is as easy and natural.
                  </p>
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="vidioPlayer">
              <div className="iconMainDiv">
                <a
                  className="vidioPlayerIcon"
                  href="https://www.youtube.com/watch?v=up68UAfH0d0"
                  target="_blank"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionStart">
          <h2>Explore top subjects</h2>
        </div>
        <div className="sectionMAinDiv">
          <div className="sectionCenterDiv">
            <div className="leftSection">
              <div className="firtsTwoCard">
                <div className="card" id="oneImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
                <div className="card" id="twoImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
              </div>
              <div className="secondTwoCard">
                <div className="card" id="threeImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
                <div className="card" id="fourImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="rightSection">
              <div className="firtsTwoCard">
                <div className="card" id="oneImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
                <div className="card" id="twoImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
              </div>
              <div className="secondTwoCard">
                <div className="card" id="threeImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
                <div className="card" id="fourImg">
                  <div className="hoverDiv">
                    <h3>
                      <a>Programing</a>
                    </h3>
                  </div>
                  <h3>
                    <a>Programing</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button className="joinbtn">
              <span className="joinBtnText">View More Subjects</span>
            </button>
          </div>
        </div>
        <div className="infoSection">
          <div className="imgDiv">
            <img src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about3.png.webp" />
          </div>
          <div className="textDiv">
            <h2 >Learner outcomes on courses you will take</h2>
            <div className="iconAndText">
              <div className="icon">
                <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
                <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
                <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
              </div>
              <div className="text">
                <p>
                  Techniques to engage effectively with vulnerable children and
                  young people.
                </p>
                <p>
                  Join millions of people from around the world learning
                  together.
                </p>
                <p>
                  Join millions of people from around the world learning
                  together. Online learning is as easy and natural.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expertsSection">
          <div className="expertsSectionStart">
            <h2>Community experts</h2>
          </div>

          <div className="expertsSwiper">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {experts.map((e) => {
                return (
                  <SwiperSlide className="swiperSlide" key={e._id}>
                    <div className="mainSwiper">
                      <div className="swiperImg">
                        <img src={e.image} alt="" />
                      </div>
                      <div className="swiperText">
                        <h2 className="title">{e.name}</h2>
                        <p className="description">{e.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="joinForFree">
          <div className="img">
            <img src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about2.png" />
          </div>
          <div className="text">
            <h2>
              Take the next step toward your personal and professional goals
              with us.
            </h2>
            <p>
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>
            <div className="btn">
                <button className="joinbtn">
                  <span className="joinBtnText">Join Now For Free</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
