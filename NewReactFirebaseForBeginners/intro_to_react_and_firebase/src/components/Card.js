import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import db from '../firebase'
//import {doc, deleteDoc} from 'firebase/firestore/lite';
import {doc, deleteDoc} from 'firebase/firestore';

const Card = (props) => {
    let navigate = useNavigate()
    const userlsuid = window.localStorage.getItem('useruid')

    const onDeletePost = () => {
        console.log(props.id)
        const postRef = doc(db, 'users', userlsuid, 'postsusers', props.id);
        deleteDoc(postRef).then((res) => {
            console.log("eliminado")
            navigate("/posts")
        })
    }

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
            {props.user &&
                <footer className="card-footer">
                    <a onClick={onDeletePost} className="card-footer-item">Delete</a>
                    <Link to={`/updatepost/${props.id}`} className="card-footer-item">Edit</Link>
                    <Link to={`/post/${props.id}`} className="card-footer-item">Read full article</Link>
                </footer>
            }
            
    </div>
  )
}

export default Card