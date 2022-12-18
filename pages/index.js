import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from "react"
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeHeader from '../components/HomeHeader';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

  

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
                      <img src={"/dmd.png"} alt="" />
                      <h3>Digital Media &amp; Design</h3>
                  </div>
                  <div className="box">
                      <img src={"/subject-icon-2.png"} alt="" />
                      <h3>Finance &amp; Accounting</h3>
                  </div>
                  <div className="box">
                      <img src="/emp.png" alt="" />
                      <h3>Electro magnatic &amp; Production</h3>
                  </div>
                  <div className="box">
                      <img src="/Coding logo.png" alt="" />
                      <h3>Coding</h3>
                  </div>
                  <div className="box">
                      <img src="/fashion.png" alt="" />
                      <h3>Fashion Designing</h3>
                  </div>
                  <div className="box">
                      <img src="/robo.png" alt="" />
                      <h3>Robotics</h3>
                  </div>
              </div>
          </section>
          {/* subjects section ends */}
          {/* home courses slider section starts  */}
          <section className="home-courses .home-courses-slider" >
              <h1 className="heading"> Our Popular Skills </h1>
              <Swiper className="swiper home-courses-slider" loop={true} grabCursor={true} spaceBetween={20} breakpoints={{
              0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },}}>
                  <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/Course1-1.png" alt="" />
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
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/robotics.png" alt="" />
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
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/fashion bg.png" alt="" />
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
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/dmd1.png" alt="" />
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
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/finance.png" alt="" />
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
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide slide">
                          <div className="image">
                              <img src="/emp2.png" alt="" />
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
                      </SwiperSlide>
                  </div>
              </Swiper>
          </section>
          

      </React.Fragment>
  )
}