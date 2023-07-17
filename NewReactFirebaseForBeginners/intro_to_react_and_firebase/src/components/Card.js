import React from 'react'
import {Link} from "react-router-dom"

const Card = (props) => {
  return (
    <div className="card my-2">
        <header className="card-header">
            <p className="card-header-title">
                {props.title}
            </p>
            <button className="card-header-icon" aria-label="more options">
                <Link to={`/post/${props.id}`}>Read full article</Link>
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div className="card-content">
            <div className="content">
                {props.content}
            </div>
        </div>
        <footer className="card-footer">
            <Link to="#" className="card-footer-item">Delete</Link>
            <Link to={`/updatepost/${props.id}`} className="card-footer-item">Edit</Link>
            <Link to={`/post/${props.id}`} className="card-footer-item">Read full article</Link>
        </footer>
    </div>
  )
}

export default Card