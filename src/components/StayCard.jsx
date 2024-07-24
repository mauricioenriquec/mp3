// src/components/StayCard.jsx
import React from 'react';

function StayCard({ stay }) {
  return (
    <div className="stay-card">
      <img src={stay.photo} alt={stay.title} className="stay-image" />
      <div className="stay-info">
        {stay.superHost && <span className="stay-type">Super Host</span>}
        <span className="stay-rating">★ {stay.rating}</span>
        <h3 className="stay-title">{stay.title}</h3>
        <p className="stay-description">{stay.type}</p>
      </div>
    </div>
  );
}

export default StayCard;
