import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
import db from '../firebase'
import {useNavigate, useParams, redirect} from "react-router-dom";
//import {doc, deleteDoc} from 'firebase/firestore/lite';
import {doc, deleteDoc} from 'firebase/firestore';

const DeletePost = (props) => {
    
  let navigate = useNavigate()
  const {id} = useParams()

  /*useEffect(() => {
    async function getPost(db) {
      const postRef = doc(db, 'posts', id);
      const postSnapshot = await deleteDoc(postRef)
    }
    getPost(db).then((res) => {
      console.log("eliminado")
    })
  },[])*/
  
  const onDeletePost = () => {
    const postRef = doc(db, 'posts', id);
    deleteDoc(postRef).then((res) => {
      console.log("eliminado")
      navigate("/posts")
    })
  }
  
  
  return (
    <div className="create_post_container">
      <section className='section'>
        <PageHeader title="Delete Post" ></PageHeader>
      </section>

      <section className='section'>
        <div className='box has-background-grey-lighter'>

            <button className="button is-primary is-medium" onClick={onDeletePost}>Delete</button>

        </div>
      </section>
    </div>
  )
}

export default DeletePost