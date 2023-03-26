import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
//import Input from './Input'
//import Textarea from './Textarea'
import {collection, doc, setDoc} from 'firebase/firestore/lite';
import db from '../firebase'
const CreatePost = (props) => {
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (event) => setTitle(event.target.value)
  const onContentChange = (event) => setContent(event.target.value)
  //function onContentChange(event){console.log(event.target.value)}

  const onCreatePost = () => {
    //console.log("create post");
    //console.log(title);
    //console.log(content);
    //let postRef = db

    
    //let payload = {title, content}
    async function addpost(db) {
        const postref = doc(collection(db, "posts"))

        await setDoc(postref, {
            id: postref.id,
            title: title,
            content: content
        });
    }

    addpost(db).then(function (doc) {
      console.log("adicionado");
    })
  }

  return (
    <div className="create_post_container">
      <div className='page_header_container'>
        <PageHeader title="Create Post" ></PageHeader>
      </div>
      <div className='post_inputs_container'>
        <div className='post_input_container'>
            <div className='post_input_title'>
                <h2>Post Title</h2>
            </div>
            <div className='post_input'>
                <input value={title} onChange={onTitleChange} type="text" placeholder="Post Title" ></input>
            </div>
        </div>

        <div className='post_input_container'>
            <div className='post_input_title'>
                <h2>Post Content</h2>
            </div>
            <div className='post_input'>
                <textarea value={content} onChange={onContentChange} className="textarea is-small" placeholder="Small textarea" rows="5" ></textarea>
            </div>
        </div>

        <div className='post_input_button'>
          <button className="button is-primary is-medium" onClick={onCreatePost}>Create Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost