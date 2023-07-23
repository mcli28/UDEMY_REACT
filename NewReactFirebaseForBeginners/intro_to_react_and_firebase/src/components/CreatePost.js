import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
//import {collection, doc, setDoc} from 'firebase/firestore/lite';
//import db from '../firebase'
import {useNavigate} from "react-router-dom";

const CreatePost = (props) => {
  
  let navigate = useNavigate()
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (event) => setTitle(event.target.value)
  const onContentChange = (event) => setContent(event.target.value)
  
  const onCreatePost = () => {
    props.create(props.user.uid, title, content)
    navigate("/posts")
  }

  return (
    <div className="create_post_container">
      <section className='section'>
        <PageHeader title="Create Post" ></PageHeader>
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

            <button className="button is-primary is-medium"
             onClick={onCreatePost}>Create Post</button>

        </div>
      </section>
    </div>
  )
}

export default CreatePost