import React, { Component } from 'react';
import './works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { useContext } from "react";
import {themeContext} from "../../context";
import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{color : darkMode? 'white' : '' }}>Works for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    <br />
                    Nobis fugiat porro, similique consectetur vel quia!
                    <br />
                    Nobis fugiat porro, similique consectetur vel quia!
                    <br />
                    Nobis fugiat porro, similique consectetur vel quia!
                </span>
                <button className='button s-button'>Hire Me</button>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div 
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-setCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-setCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-setCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-setCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-setCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
     );
}
 
export default Works;