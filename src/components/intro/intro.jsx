import React, { Component } from 'react';
import './intro.css';
import Github from '../../img/github.png';
import Linedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../floatingDiv/floatingDiv';
import { useContext } from "react";
import {themeContext} from "../../context";
import { motion } from 'framer-motion';
import { WindowsSizeContext } from '../../windowSizeContext';

const Intro = () => {
    const windowSizeContext = useContext(WindowsSizeContext);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 2, 
        type : 'spring'
    }
    return ( 
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                <span className="i-name" style={{color : darkMode? 'white' : '' }}>Hy! I am</span>
                <span>Reza Torkamani</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glassesimoji} 
                alt="" />
                <motion.div 
                initial={windowSizeContext.windowSize[0]>=1024 ? {top:'-4%', left:'74%'} : {top:'-25%', left:'50%'}}
                whileInView={windowSizeContext.windowSize[0]>=1024 ?{left:'68%'}: {left:'60%'}}
                transition={transition}
                style={{top:'-4%', left : '68%' }}
                className='floating-div'>
                    <FloatingDiv image ={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div 
                initial={windowSizeContext.windowSize[0]>=1024 ? {top:'18rem', left:'9rem'}: {top:'15rem', left:'9rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{top:'18rem', left : '0rem' }}
                className='floating-div'>
                    <FloatingDiv image ={thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top : '17rem',
                    width : '21rem',
                    height : '11rem',
                    left : '-9rem',
                }}></div>
            </div>
            
        </div>
     );
}
 
export default Intro;