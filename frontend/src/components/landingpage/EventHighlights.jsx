import React from 'react';
import RoughBox from './RoughBox';
import './EventHighlights.css';

function EventHighlights() {
  const events = [
    {
      emoji: '🎭',
      name: 'Swaram 2k26',
      date: 'February 25, 2026',
      desc: 'A mass Cultural Event',
    },
    {
      emoji: '💻',
      name: 'E-Horizon',
      date: 'February 19 to 28 2026',
      desc: 'A mass Tech Event',
    },
    {
      emoji: '🌟',
      name: 'Enthusia 2k26',
      date: 'March 2 & 3 2026',
      desc: '2 days mass vibe cultural event ',
    },
    {
      emoji: '🎉',
      name: 'Annual Day',
      date: 'June 5, 2026',
      desc: 'Prize distribution ceremony',
    },
  ];

  return (
    <section className="events-section" id="events">
      <h2 className="events-title">Event Highlights ⭐</h2>
      <div className="events-grid">
        {events.map((event, i) => (
          <RoughBox key={i} width={250} height={250}>
            <span style={{ fontSize: '2.2rem' }}>{event.emoji}</span>
            <h3 className="event-name">{event.name}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-desc">{event.desc}</p>
          </RoughBox>
        ))}
      </div>
    </section>
  );
}

export default EventHighlights;
