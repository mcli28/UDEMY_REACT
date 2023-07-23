import React, {useState} from 'react'
import {Link, NavLink, useNavigate, Navigate} from 'react-router-dom'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { extend } from 'lodash';

const Navbar = (props) => {
  console.log(props)
  let navigate = useNavigate()
  
  const [user, setUser] = useState(false)

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
      {props.user 
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

/*class Navbar extends Component{

  constructor (){
    super()
    this.state = {
      user2: false
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link  to="posts" className="navbar-item">
            Posts
          </Link>
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
        </div>
      </nav>
    )
  }
}*/

export default Navbar