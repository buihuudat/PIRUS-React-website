import React from 'react';

import HomeCard from './HomeCard';
import './style.scss';

export default function Home() {
  return (
    <div className="home container">
      <div className="home__wrap">
        <div className="home__top">
          <div className="home__title">
            <span>CREATIVE MIND, CREATIVE WORKS.</span>
          </div>
          <div className="home__subtitle">
            <span>We are digital agency.</span>
          </div>
          <button className="home__button">
            getting started
          </button>
        </div>
        <HomeCard />
      </div>
    </div>
  )
}
