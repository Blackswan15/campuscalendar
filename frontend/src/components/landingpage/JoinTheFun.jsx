import React from 'react';
import RoughBox from './RoughBox';
import teamaura from '../../assets/teamaura.png';
import './JoinTheFun.css';

function JoinTheFun() {
  return (
    <section className="join-section" id="join">
      <div className="join-left">
        <h2 className="join-title">Join the Fun ✏️</h2>
        <RoughBox width={320} height={280}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem' }}>Login / Register</h3>
          <input
            type="text"
            placeholder="Username"
            className="join-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="join-input"
          />
          <div className="join-buttons">
            <button className="join-btn">Login</button>
            <button className="join-btn">Register</button>
          </div>
        </RoughBox>
      </div>
      <div className="join-right">
        <div className="join-illustration">
          <img src={teamaura} alt="Team" style={{height: '100%', width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </section>
  );
}

export default JoinTheFun;
