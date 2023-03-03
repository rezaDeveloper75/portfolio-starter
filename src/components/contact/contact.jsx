import React, { Component } from 'react';
import './contact.css';
import { useContext } from "react";
import {themeContext} from "../../context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span style={{color : darkMode? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                </div>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            <div className="c-right">
                <form action="">
                    <input type="text" name='user_name' className='user' placeholder='Name'/>
                    <input type="email" name='user_email' className='user' placeholder='Email'/>
                    <textarea name="message" className='user' placeholder='Message'/>
                    <input type="submit" value='Send' className='button'/>
                    <div
                    className='blur c-blur1'
                    style={{background:'var(--purple)'}}
                    ></div>
                </form>
            </div>
        </div>
     );

}
export default Contact;