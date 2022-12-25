import React from 'react'
import {
    Routes,
    Route,
    redirect
  } from "react-router-dom";
import auth from '../auth';

const protectedRoute = ({component:Component, ...rest}) => {
  return (
    <Route {...rest} render={
        props => {
            if(auth.isAuthenticated()) {
                return <Component {...props}/>
            } else {
                return <redirect to='/'/>
            }
        }
    }/>
  )
}

export default protectedRoute