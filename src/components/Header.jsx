// src/components/Header.jsx
import React from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta del logo sea correcta

function Header({ onSearch }) {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;
