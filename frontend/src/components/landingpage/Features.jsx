import React from 'react';
import './Features.css';
import RoughBoard from './RoughFeature';

function Features() {
  const features = [
    {
      emoji: '📅',
      title: 'Event Scheduling',
      desc: 'Create and manage events with date pickers, venue booking, and automated conflict detection.',
    },
    {
      emoji: '🔔',
      title: 'Push Notifications',
      desc: 'Stay updated with real-time alerts for new events, reminders, and announcements.',
    },
    {
      emoji: '📊',
      title: 'Participation Tracking',
      desc: 'Track RSVPs, attendance, and generate reports for every event.',
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-left">
        <div className="features-illustration">
          <RoughBoard />
        </div>
      </div>
      <div className="features-right">
        <h2 className="features-title">Features ⚡</h2>
        {features.map((f, i) => (
          <div className="feature-item" key={i}>
            <span className="feature-emoji">{f.emoji}</span>
            <div>
              <h3 className="feature-name">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
