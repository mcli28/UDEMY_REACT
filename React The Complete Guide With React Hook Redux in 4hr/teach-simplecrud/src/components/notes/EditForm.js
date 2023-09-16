import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/noteAction'
import useInput from '../../customhook/useInput';
import { useParams, useNavigate } from "react-router-dom";

import db from '../../config/fbconfig';
import {getDoc, doc} from 'firebase/firestore';

const EditForm = () => {
  let navigate = useNavigate()

  const {id} = useParams()
  window.localStorage.setItem('sid', id)
  const lsid = window.localStorage.getItem('sid')
	const [note, setNote] = useState({})
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  useEffect(() => {
    async function getNota(db) {
        const noteRef = doc(db, 'notes', id);
        const notaAwait = await getDoc(noteRef)
        if(notaAwait.exists()){
          setNote(notaAwait.data())
          let {content, title} = notaAwait.data()
          setTitle(title)
          setContent(content)
        }
    }
    getNota(db)

  },[])

 

  const onTitleChange = (event) => setTitle(event.target.value)
  const onContentChange = (event) => setContent(event.target.value)

  //const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(note.id,title, content)
    updateNote(note.id, title, content)
    navigate("/")

  }



  return (
    <div className='section'>
      <form onSubmit={handleSubmit} className="">
        <div className='message is-info'>

          <div className='message-header'>
            <input className="input is-rounded is-medium" type="text" value={title} onChange={onTitleChange} placeholder="Titulo nota..."/>
          </div>
          <div className="message-body">
            <textarea className="textarea is-medium" value={content} onChange={onContentChange} placeholder="Contenido nota..." rows="5"></textarea>
            <button className="button is-success is-medium">Update</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default EditForm