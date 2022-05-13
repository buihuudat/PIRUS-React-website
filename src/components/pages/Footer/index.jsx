import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer__top">
        <div className="footer__social">
        <i className="fa-solid fa-b"></i>
        <i className="fa-solid fa-b"></i>
        <i className="fa-solid fa-b"></i>
        <i className="fa-solid fa-b"></i>
        </div>
        <div className="footer__title">
          Have any project in mind?
        </div>
        <button className="footer__button">
          make inquiry
        </button>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <div className="footer__bottom-left-title">pirus</div>
          <div className="footer__bottom-left-subtitle">
            We are more than a digital agency.
            </div>
          <div className="footer__bottom-left-line"></div>
        </div>
        <div className="footer__bottom-right">
          <ul className="footer__right-title">
            <p>contact us</p>
            <li className="footer__right-title-item">
            <i className="fa-solid fa-phone"></i>
            <span>+1232456789</span>
            </li>
            <li className="footer__right-title-item">
            <i className="fa-solid fa-envelope"></i>
            <span>something@gmail.com</span>
            </li>
            <li className="footer__right-title-item">
            <i className="fa-solid fa-location-pin"></i>
            <span>West Virginia, USA</span>
            </li>
            <li className="footer__right-title-item">
            <i className="fa-solid fa-calendar"></i>
            <span>Monday to Friday</span>
            </li>
          </ul>
          <ul className="footer__right-title">
            <p>our services</p>
            <li className="footer__right-title-item">
            <span>Signle Project</span>
            </li>
            <li className="footer__right-title-item">
            <span>Services 1</span>
            </li>
            <li className="footer__right-title-item">
            <span>Services 2</span>
            </li>
            <li className="footer__right-title-item">
            <span>Works</span>
            </li>
          </ul>
          <ul className="footer__right-title">
            <p>about us</p>
            <li className="footer__right-title-item">
            <span>About</span>
            </li>
            <li className="footer__right-title-item">
            <span>Blog</span>
            </li>
            <li className="footer__right-title-item">
            <span>Contact Us 1</span>
            </li>
            <li className="footer__right-title-item">
            <span>Contact Us 2</span>
            </li>
          </ul>
        </div>
        {/* <hr /> */}
      </div>
        <div className="footer__infooter">
          <div className="footer__infooter-title">
            <span>Copyright 2022 All Rights reserved</span>
            <span>PRIVACY POLICY</span>
            <span>TERMS OF USE</span>
          </div>
          <div className="footer__infooter-bottom">
            <span>Lorem ipsum dolor sit amet consectetur</span>
            <div className="footer__infooter-bottom-social">
              <i className="fa-solid fa-b"></i>
              <i className="fa-solid fa-b"></i>
              <i className="fa-solid fa-b"></i>
              <i className="fa-solid fa-b"></i>
            </div>
          </div>
        </div>
    </div>
  )
}
