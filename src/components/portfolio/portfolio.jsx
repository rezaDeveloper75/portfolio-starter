import React, { Component } from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { useContext } from "react";
import {themeContext} from "../../context";
import { WindowsSizeContext } from '../../windowSizeContext';

const Portfolio = () => {

    const windowSizeContext = useContext(WindowsSizeContext);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return ( 
        <div className="portfolio">
            {/* heading */}
            <span style={{color : darkMode? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={windowSizeContext.windowSize[0]>1024? 20 : windowSizeContext.windowSize[0]>480? 30 : 20}
                slidesPerView={windowSizeContext.windowSize[0]>1024? 3 : windowSizeContext.windowSize[0]>480? 2 : 1}
                grabCursor={true}
                className='portfolio-slider'>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default Portfolio;