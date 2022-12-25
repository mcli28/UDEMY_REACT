import React from 'react';
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Post from './components/Post';
import PageNotFound from './components/PageNotFound';
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import protectedRoute from './components/protectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <protectedRoute path='/about' element={<About/>}/>
          <protectedRoute path='/contact' element={<Contact/>}/>
          <protectedRoute path='/posts/:post_id' element={<Post/>}/>
          <Route  element={<PageNotFound/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
