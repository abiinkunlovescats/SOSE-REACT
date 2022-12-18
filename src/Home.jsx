
import React, { useState } from 'react'
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import AccountForm from "./components/AccountForm"
import {Swiper} from 'swiper/react';
import "swiper/css/bundle";
import dmd from "./assets/dmd.png"
import subject2 from "./assets/subject-icon-2.png";
import Footer from './components/Footer';
function Home() {
    const [showForm, SetshowForm] = useState(false);
    const passData = bool => {
        SetshowForm(bool);
        console.log(showForm)
    };

    return (
        <React.Fragment>
           
            {/* account form section ends */}
            {/* header section ends */}
            {/* home section starts  */}
            <HomeHeader/>
            {/* home section ends */}
            {/* subjects section starts  */}
            <section className="subjects">
                <h1 className="heading">our popular subjects</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={dmd} alt="" />
                        <h3>Digital Media &amp; Design</h3>
                    </div>
                    <div className="box">
                        <img src={subject2} alt="" />
                        <h3>Finance &amp; Accounting</h3>
                    </div>
                    <div className="box">
                        <img src="/public/emp.png" alt="" />
                        <h3>Electro magnatic &amp; Production</h3>
                    </div>
                    <div className="box">
                        <img src="/public/Coding logo.png" alt="" />
                        <h3>Coding</h3>
                    </div>
                    <div className="box">
                        <img src="/public/fashion.png" alt="" />
                        <h3>Fashion Designing</h3>
                    </div>
                    <div className="box">
                        <img src="/public/robo.png" alt="" />
                        <h3>Robotics</h3>
                    </div>
                </div>
            </section>
            {/* subjects section ends */}
            {/* home courses slider section starts  */}
            <Swiper className="home-courses" loop={true} grabCursor={true} spaceBetween= {20} >
                <h1 className="heading"> Our Popular Skills </h1>
                <div className="swiper home-courses-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/Course1-1.png" alt="" />
                                <h3>Coding</h3>
                            </div>
                            <div className="content">
                                <h3>Coding</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="coding.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/robotics.png" alt="" />
                                <h3>Robotics</h3>
                            </div>
                            <div className="content">
                                <h3>Robotics</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="robotics.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/fashion bg.png" alt="" />
                                <h3>Fashion Designing</h3>
                            </div>
                            <div className="content">
                                <h3>Fashion Designing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="fashion.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/dmd1.png" alt="" />
                                <h3>Digital Media &amp; Design</h3>
                            </div>
                            <div className="content">
                                <h3>Digital Media &amp; Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="dmd.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/finance.png" alt="" />
                                <h3>Finance &amp; Accounting</h3>
                            </div>
                            <div className="content">
                                <h3>Finance &amp; Accounting</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="Finance.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src="/public/emp2.png" alt="" />
                                <h3>Electro Machanical Production</h3>
                            </div>
                            <div className="content">
                                <h3>Electro Magnatic &amp; Production</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="emp.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>
            
            
        </React.Fragment>
    )
}


export default Home




