import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/note/:id' element={<NoteDetail />}/>
        <Route path='/editform/:id' element={<EditForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
