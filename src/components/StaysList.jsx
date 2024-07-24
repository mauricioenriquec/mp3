// src/components/StaysList.jsx
import React, { useState, useEffect } from 'react';
import StayCard from './StayCard';
import staysData from '../data/stays.json';

function StaysList() {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);

  useEffect(() => {
    setStays(staysData);
    setFilteredStays(staysData);
  }, []);

  const handleSearch = (location, guests) => {
    const filtered = stays.filter(stay =>
      stay.city.toLowerCase().includes(location.toLowerCase()) &&
      stay.maxGuests >= guests
    );
    setFilteredStays(filtered);
  };

  return (
    <div className="stays-list">
      {filteredStays.map(stay => (
        <StayCard key={stay.id} stay={stay} />
      ))}
    </div>
  );
}

export default StaysList;
