import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import moment from 'moment';

import db from '../../config/fbconfig';
import {getDoc, doc} from 'firebase/firestore';

//import Note from './Note';
//import { useSelector } from 'react-redux';
import {useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase'

const NoteDetail = (props) => {
    const {id} = useParams()
    window.localStorage.setItem('sid', id)
    const lsid = window.localStorage.getItem('sid')
    console.log(lsid)
	const [note, setNote] = useState({})

    useEffect(() => {
        async function getNota(db) {
            const noteRef = doc(db, 'notes', id);
            console.log(noteRef)
            const notaAwait = await getDoc(noteRef)
            if(notaAwait.exists()){
                setNote(notaAwait.data())
            }
        }
        getNota(db)
    },[])

    const noteMarkup = !isLoaded(note)?(
        <div className='message is-info'>
            <div className='message-header'>
                Loading ...
            </div>
            <div className="message-body">

            </div>
        </div>
    ):isEmpty(note)?(
        <div className='message is-info'>
            <div className='message-header'>
                The note content is empty
            </div>
            <div className="message-body">
            </div>
        </div>
    ):(
        <div className='message is-info'>
            <div className='message-header'>
                {note.title}
            </div>
            <div className="message-body">
                {note.content}
                <p>
                {moment(note.createdAt?.toDate(), "YYYYMMDD").fromNow()}
                </p>
            </div>
        </div>
    )

  return noteMarkup
}

export default NoteDetail