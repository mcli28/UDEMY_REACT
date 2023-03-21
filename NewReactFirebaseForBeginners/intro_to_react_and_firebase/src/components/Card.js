import React from 'react'
import {Link} from "@reach/router"
//import {Link} from "react-router-dom"

const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
        <header className="card-header">
            <p className="card-header-title">
                {props.title}
            </p>
            <button className="card-header-icon" aria-label="more options">
            <Link to={`post/${props.id}`}>Read full article</Link>
            <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div className="card-content">
            <div className="content">
                {props.content}
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time >11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
        </footer>
    </div>
  )
}

export default Card