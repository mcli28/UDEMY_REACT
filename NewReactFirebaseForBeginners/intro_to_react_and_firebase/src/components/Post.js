import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
import Card from './Card'
import {getDoc, doc} from 'firebase/firestore/lite';
import db from '../firebase'
import { useParams } from "react-router-dom";
          
const Post = () => {
  const {id} = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  useEffect(() => {
    async function getPost(db) {
      const postRef = doc(db, 'posts', id);
      const postSnapshot = await getDoc(postRef)
        .then(doc => {
          console.log(doc);
          let {content, title} = doc.data()
          setTitle(title)
          setContent(content)
        })
    }

    getPost(db)

  },[])
  
  return (
    <div className="post_container">
      <div className='page_header_container'>
        <PageHeader title={title} ></PageHeader>
      </div>
      <section className='section has-background-grey-lighter'>
        <Card title={title} content={content}>
        </Card>
      </section>
    </div>
  )
}

export default Post