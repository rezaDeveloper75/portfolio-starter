import React, { Component } from 'react';
import './testmonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilePic1 from '../../img/profile1.png';
import profilePic2 from '../../img/profile2.png';
import profilePic3 from '../../img/profile3.png';
import profilePic4 from '../../img/profile4.png';
import profilePic5 from '../../img/profile5.png';
import profilePic6 from '../../img/profile6.png';
import { useContext } from "react";
import {themeContext} from "../../context";

const Testmonial = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img : profilePic1,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        },
        {
            img : profilePic2,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        },
        {
            img : profilePic3,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        },
        {
            img : profilePic4,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        },
        {
            img : profilePic5,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        },
        {
            img : profilePic6,
            review: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere possimus debitis itaque nam unde maxime iusto doloribus quae magni atque!'
        }
    ]

    return ( 
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
                <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}} 
            >
                {clients.map((client, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                        
                    )
                })}
            </Swiper>
        </div>
     );
}
 
export default Testmonial;