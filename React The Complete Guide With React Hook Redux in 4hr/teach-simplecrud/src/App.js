import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
