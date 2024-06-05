import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;