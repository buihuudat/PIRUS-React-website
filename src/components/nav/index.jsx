import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__wrap">
        <div className="nav__logo">
          <span>pirus</span><span className='nav__logo-line'></span>
        </div>
        <ul className="nav__link">
          <li className="nav__link-item links__dropdown nav-home active">
            <Link to='/'>Home</Link>
            <i className="fa-solid fa-angle-down"></i>
            <ul className="nav__link-child nav-home">
              <li className="nav__link-child-item">
                <Link to='/home1'>Home 1</Link>
              </li>
              <li className="nav__link-child-item">
                <Link to='/home2'>Home 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav__link-item links__dropdown nav-service">
            <Link to='/service'>Service</Link>
            <i className="fa-solid fa-angle-down"></i>
            <ul className="nav__link-child nav-service">
              <li className="nav__link-child-item">
                <Link to='/s1'>Service 1</Link>
              </li>
              <li className="nav__link-child-item">
                <Link to='/s2'>Service 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav__link-item">
            <Link to='/w'>Works</Link>
          </li>
          <li className="nav__link-item">
            <Link to='/a'>Abou</Link>
          </li>
          <li className="nav__link-item">
            <Link to='/b'>Blog</Link>
          </li>
          <li className="nav__link-item links__dropdown nav-contact">
            <Link to='/c'>Contact</Link>
            <i className="fa-solid fa-angle-down"></i>
            <ul className="nav__link-child nav-contact">
              <li className="nav__link-child-item">
                <Link to='/c1'>Contact 1</Link>
              </li>
              <li className="nav__link-child-item">
                <Link to='/c2'>Contact 2</Link>
              </li>
            </ul>
          </li>
          <div className="nav__button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </ul>
      </div>
    </div>
  )
}
