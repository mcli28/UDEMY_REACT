import React from 'react'
import Form from './Form'
import {collection, getDocs} from 'firebase/firestore/lite';
import {db} from '../../config/fbconfig'
import NotesList from '../notes/NotesList';
import {useNavigate} from "react-router-dom";


const Home = () => {
  let navigate = useNavigate()
  let notitasArr = []; 
  async function getNotes(db) {
    const notesCol = collection(db, 'notes');
    const noteSnapshot = await getDocs(notesCol);
    noteSnapshot.forEach((doc) => {
      notitasArr.push(doc.data())    
    })

    return notitasArr;
  }
  getNotes(db).then(function (doc) {
    console.log("adicionado");
    navigate("/")
  })
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

