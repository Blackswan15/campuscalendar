import React from 'react';
import './HeroSection.css';
import kec from '../../assets/kec.png';
import temp from '../../assets/temp.jpg';
function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">Campus Calendar</h1>
        <p className="hero-subtitle">Event Managment Portal by A2C</p>
        <p className="hero-tagline">Plan. Participate. Celebrate. 🎉</p>
      </div>
      <div className="hero-right">
        <div className="hero-doodles">
          <img src={temp} alt="" style={{height: '30%', width: '50%', borderRadius: '8px' }} />
          <button className="explore-btn">Explore more</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
