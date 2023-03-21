import React from 'react'
import Form from './Form'
import {collection, getDocs} from 'firebase/firestore/lite';
import {db} from '../../config/fbconfig'
import NotesList from '../notes/NotesList';

const Home = () => {
  let notitasArr = []; 
  async function getNotes(db) {
    const notesCol = collection(db, 'notes');
    const noteSnapshot = await getDocs(notesCol);
    noteSnapshot.forEach((doc) => {
      notitasArr.push(doc.data())    
    })
    //const noteList = noteSnapshot.docs.map(doc => doc.data());
    //return noteList;
    return notitasArr;
  }
  getNotes(db)
  console.log(notitasArr);

  return (
    <div className='container'>
        <div className='columns'>
            <div className='column'><Form/></div>
            <div className='column'>
              <NotesList notes={notitasArr} />
            </div>
        </div>
    </div>
  )
}

export default Home

