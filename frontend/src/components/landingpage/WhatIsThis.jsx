import React from 'react';
import CalendarChecklist from './CalendarChecklist';
import './WhatIsThis.css';

function WhatIsThis() {
  return (
    <section className="what-section" id="what">
      <div className="what-left">
        <h2 className="what-title">What is this? ✏️</h2>
        <p className="what-desc">
          A one-stop platform for all campus events at Kongu Engineering College. 
          From cultural fests to tech symposiums — plan, manage, and participate effortlessly.
        </p>
        <ul className="what-features">
          <li>📅 Easy event creation & scheduling</li>
          <li>🎟️ Seamless student registration</li>
          <li>📊 Real-time participation tracking</li>
          <li>🔔 Instant notifications & updates</li>
        </ul>
      </div>
      <div className="what-right">
        <CalendarChecklist />
      </div>
    </section>
  );
}

export default WhatIsThis;

