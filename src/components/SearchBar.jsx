// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import stays from '../data/stays.json';
import locationIcon from '../assets/location.svg'; // Asegúrate de que la ruta del icono sea correcta

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  // UseEffect para preparar las sugerencias de ubicación únicas
  useEffect(() => {
    const uniqueLocations = [
      ...new Set(stays.map(stay => `${stay.city}, ${stay.country}`))
    ];
    setLocationSuggestions(uniqueLocations);
  }, []);

  const handleSearch = () => {
    // Validación básica
    if (location.trim() === '' || guests.trim() === '') {
      alert("Please enter both location and number of guests.");
      return;
    }
    onSearch(location, parseInt(guests));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setIsLocationDropdownOpen(true);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-location">
        <input
          type="text"
          placeholder="Add location"
          value={location}
          onChange={handleLocationChange}
          onFocus={() => setIsLocationDropdownOpen(true)}
          className="search-input"
        />
        {isLocationDropdownOpen && (
          <div className="location-dropdown">
            {locationSuggestions
              .filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
              .map((suggestion, index) => (
                <div
                  key={index}
                  className="location-dropdown-item"
                  onMouseDown={() => handleLocationSelect(suggestion)}
                >
                  <img src={locationIcon} alt="Location Icon" className="location-icon" />
                  {suggestion}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="search-bar-guests">
        <input
          type="number"
          placeholder="Add guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="search-input"
          min="1"
        />
      </div>

      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
