import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
import db from '../firebase'
import {useNavigate, useParams} from "react-router-dom";
//import {collection, doc, setDoc, getDoc} from 'firebase/firestore/lite';
import {doc, getDoc} from 'firebase/firestore';

const UpdatePost = (props) => {
    
  let navigate = useNavigate()
  const {id} = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const onTitleChange = (event) => setTitle(event.target.value)
  const onContentChange = (event) => setContent(event.target.value)

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
  
  const onUpdatePost = () => {
    console.log(props)
    console.log(id)
    props.update(id, title, content)
    navigate("/posts")
  }
  
  
  return (
    <div className="create_post_container">
      <section className='section'>
        <PageHeader title="Update Post" ></PageHeader>
      </section>

      <section className='section'>
        <div className='box has-background-grey-lighter'>
            
            <div className='field'>
              <label className='label'>Post Title</label>
              <div className='control'>
                  <input value={title} onChange={onTitleChange} className='input' type="text" placeholder="Post Title" ></input>
              </div>  
            </div>

            <div className='field'>
              <label className='label'>Post Content</label>
              <div className='control'>
                  <textarea value={content} onChange={onContentChange} className="textarea is-small" placeholder="Small textarea" rows="5" ></textarea>
              </div>
            </div>

            <button className="button is-primary is-medium" onClick={onUpdatePost}>Edit Post</button>

        </div>
      </section>
    </div>
  )
}

export default UpdatePost