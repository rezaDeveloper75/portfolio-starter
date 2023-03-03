import React, { Component } from 'react';
import './services.css';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import HeartEmoji from '../../img/heartemoji.png';
import Card from '../card/card';
import { useContext } from "react";
import {themeContext} from "../../context";
import { motion } from 'framer-motion';



const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 1, 
        type : 'spring'
    }
    return ( 
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span style={{color : darkMode? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    <br />
                    Nobis fugiat porro, similique consectetur vel quia!
                </span>
                <button className='button s-button'>Download CV</button>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div 
                initial={{left:'40rem'}}
                // animate={{left:'24rem'}}
                whileInView={{left:'24rem'}}
                transition={transition}
                style={{left: '24rem'}}>
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </motion.div>
                <motion.div 
                initial={{ left: "-10rem", top: "12rem" }}
                whileInView={{ left: "2rem" }}
                transition={transition}
                style={{top: '10rem', left: '2rem'}}>
                    <Card 
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {'HTML, CSS, Javascript, React'}
                    />
                </motion.div>
                <motion.div 
                initial={{ top: "19rem", left: "35rem" }}
                whileInView={{ left: "20rem" }}
                transition={transition}
                style={{top: '19rem', left: '20rem'}}>
                    <Card 
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {'Lorem ipsum dolor sit amet consectetur adipisicing.'}
                    />  
                </motion.div>
                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
     );
}
 
export default Services;