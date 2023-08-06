import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {auth} from '../firebase'
import { signOut } from "firebase/auth";
import { extend } from 'lodash';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';
import SignIn from './SignIn';
import SignUp from './SignUp';
const Navbar = (props) => {
  //let navigate = useNavigate()
  //console.log(props)

  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("signing out")
      //navigate("/signin")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      {props.user 
        ?
        <Link  to="/posts" className="navbar-item">
          {props.title ? props.title :<img src="https://bulma.io/images/bulma-logo.png" alt='' width="112" height="28"/>}
        </Link>
        :
        <Link to="/signin"  className="navbar-item">
          {props.title ? props.title :<img src="https://bulma.io/images/bulma-logo.png" alt='' width="112" height="28"/>}
        </Link>
      }
        <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        {!props.user ? 
        <div className="navbar-start">
            <NavLink to="/signup" className="navbar-item">Sign Up</NavLink>
            <NavLink to="/signin" className="navbar-item">Sign In</NavLink>
        </div>
        :
        <div className="navbar-end">
          <Link to="createpost" className="navbar-item">create</Link>
          <NavLink to="" className="navbar-item" onClick={onSignOut}>Sign out</NavLink>
        </div>
        }
      </div>
    </nav>

  )
}

export default Navbar