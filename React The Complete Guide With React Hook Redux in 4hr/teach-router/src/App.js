import React from 'react';
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
