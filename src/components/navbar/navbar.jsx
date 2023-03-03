import React, { Component } from 'react';
import Toggle from '../toggle/toggle';
import './navbar.css';
import { Link } from 'react-scroll';
import Menu from '../../img/menu-icon.png';
import EXMark from '../../img/exmark-icon.png';

const Navbar = () => {
    return (
      <>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Reza Tr</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <a onClick={handleMenu} href="#"><img className='toggle_btn_icon' src={Menu} alt="" /></a>
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                      <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="services" spy={true} smooth={true}>
                          Serivces
                        </Link>
                      </li>
                      <li>
                        <Link to="works" spy={true} smooth={true}>
                          Experience
                        </Link>
                      </li>
                      <li>
                        <Link to="portfolio" spy={true} smooth={true}>
                          Protfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="testimonial" spy={true} smooth={true}>
                          Testimonial
                        </Link>
                      </li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
              </div>
        </div>
        <div className="dropdown_menu">
        <ul style={{listStyleType: 'none'}}>
          <li>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true}>
              Serivces
            </Link>
          </li>
          <li>
            <Link to="works" spy={true} smooth={true}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              Protfolio
            </Link>
          </li>
          <li>
            <Link to="testimonial" spy={true} smooth={true}>
              Testimonial
            </Link>
          </li>
        </ul>
      </div>
    </>
     );
     function handleMenu(){
        const dropDownMenu = document.querySelector('.dropdown_menu');
        const isOpen = dropDownMenu.classList.contains('open');
        const toggle_btn_icon = document.querySelector('.toggle_btn_icon');
        dropDownMenu.classList.toggle('open');

        dropDownMenu.classList.contains('open') ? toggle_btn_icon.src = EXMark : toggle_btn_icon.src = Menu
     }
}
 
export default Navbar;