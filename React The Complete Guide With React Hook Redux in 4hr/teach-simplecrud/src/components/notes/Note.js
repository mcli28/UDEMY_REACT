import React from 'react'
//import {doc, deleteDoc} from 'firebase/firestore';
import {Link} from 'react-router-dom'
import {deleteNote, toggleFav} from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux';
import moment from 'moment'
const Note = ({note}) => {

  /*const onDeleteNote = () => {
    const postRef = doc(db, 'notes', note.id);
    deleteDoc(postRef).then((res) => {
      console.log("eliminado")
    })
  }*/
  const dispatch = useDispatch()
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note))
  }
  const toggleFavoriteHandler = () => {
    dispatch(toggleFav(note))
  }
  const editNoteHandler = () => {
    dispatch({type: 'EDIT_NOTE', payload: note})
  }

  return (
    <div className='message is-info'>
      <div className='message-header'>
        <a href='#' className={note.favorite ? `has-text-danger` : `has-text-light`}  onClick={toggleFavoriteHandler}><ion-icon name="heart" ></ion-icon></a>
        <Link to={"/note/"+note.id}>
          {note.title}
        </Link>
        <button className="delete is-medium" onClick={deleteNoteHandler}></button>
      </div>
      <div className="message-body">
        {note.content}
        <p>
          {moment(note.createdAt.toDate(), "YYYYMMDD").fromNow()}
        </p>
        <Link to={"/editform/"+note.id} onClick={editNoteHandler}>
          <ion-icon name="pencil" ></ion-icon>
        </Link>
      </div>
    </div>
  )
}

export default Note