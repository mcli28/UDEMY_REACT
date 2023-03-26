import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
import Card from './Card'
//import api from '../mock_api'
import {collection, getDoc, doc, setDoc} from 'firebase/firestore/lite';
import db from '../firebase'

          
const Post = (props) => {
  //console.log(props)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  useEffect(() => {
    //let post = api[props.id]
    //console.log(post)
    //setTitle(post.title)
    //setContent(post.content)

    async function getPost(db) {
      const postRef = doc(db, 'posts', props.id);
      const postSnapshot = await getDoc(postRef)
        .then(doc => {
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
      <div className='post_content_container'>
        <Card title={title} content={content}>
        </Card>
      </div>
    </div>
  )
}

export default Post