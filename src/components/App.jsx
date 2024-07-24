// src/components/App.jsx
import React, { useState } from 'react';
import Header from './Header';
import StayCard from './StayCard';
import stays from '../data/stays.json';
import '../styles/index.css';

const App = () => {
  const [filteredStays, setFilteredStays] = useState(stays);

  const handleSearch = (location, guests) => {
    const filtered = stays.filter(stay => {
      const locationMatch = `${stay.city}, ${stay.country}`.toLowerCase().includes(location.toLowerCase());
      const guestMatch = stay.maxGuests >= guests;
      return locationMatch && guestMatch;
    });
    setFilteredStays(filtered);
  };

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} />
      <div className="stays-list">
        {filteredStays.map((stay, index) => (
          <StayCard key={index} stay={stay} />
        ))}
      </div>
    </div>
  );
};

export default App;
