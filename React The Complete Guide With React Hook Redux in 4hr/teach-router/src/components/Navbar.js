import React from 'react'
import { Link, NavLink, redirect } from 'react-router-dom'
import auth from '../auth'
const Navbar = (props) => {
    //console.log('Navbar', props);
    //setTimeout(() => {
    //  return redirect("/about")
    //}, 1000)
    const authHandler = () => {
        if(auth.isAuthenticated()){
            auth.logout(() => {
                props.history.push('/')
            })
        } else {
            auth.login(() => {
                props.history.push('/about')
            })
        }
    }
    const authText = auth.isAuthenticated() ? 'logout' : 'login'
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>
            </ul>
            <button className='btn btn-success navbar-btn' onClick={authHandler}>{authText}</button>
        </div>
    </nav>
  )
}

export default Navbar