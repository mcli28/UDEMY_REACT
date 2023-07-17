import React, {useState, Component} from 'react'
import {Link, NavLink, useNavigate, Navigate} from 'react-router-dom'
//import {Router, Link } from "@reach/router";

import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { extend } from 'lodash';

/*const Navbar = (props) => {
  let navigate = useNavigate()
  
  const [user, setUser] = useState(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is signed in")
      console.log(user)
      setUser(user)
    } else {
      console.log("no user is signed in")
    }
  });

  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("signing out")
      setUser(false)
      navigate("/signin")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      {user 
        ?
        <Link  to="/posts"    className="navbar-item">
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
        {!user ? 
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
}*/

class Navbar extends Component{

  constructor (){
    super()
    this.state = {
      user2: false
    }
    //const [user, setUser] = useState(false)
    //this.onAuthStateChanged = this.onAuthStateChanged.bind(this)

  }

  /*onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is signed in")
      console.log(user)
      setUser(user)
    } else {
      console.log("no user is signed in")
    }
  });

  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("signing out")
      setUser(false)
      //<Navigate to="/signin"/>
    }).catch((error) => {
      // An error happened.
    });
  }*/

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link  to="posts" className="navbar-item">
            Posts
          </Link>
        {/*user 
          ?
          <Link  to="/posts"    className="navbar-item">
            {props.title ? props.title :<img src="https://bulma.io/images/bulma-logo.png" alt='' width="112" height="28"/>}
          </Link>
          :
          <Link to="/signin"  className="navbar-item">
            {props.title ? props.title :<img src="https://bulma.io/images/bulma-logo.png" alt='' width="112" height="28"/>}
          </Link>*/
        }
          <Link to='' role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="createpost" className="navbar-item">create</Link>
          </div>
          {/*!user ? 
          <div className="navbar-start">
              <NavLink to="/signup" className="navbar-item">Sign Up</NavLink>
              <NavLink to="/signin" className="navbar-item">Sign In</NavLink>
          </div>
          :
          <div className="navbar-end">
            <Link to="createpost" className="navbar-item">create</Link>
            <NavLink to="" className="navbar-item" >Sign out</NavLink>
          </div>
      */}
        </div>
      </nav>
    )
  }
}

export default Navbar