import React from 'react'
import Form from './Form'
//import { useSelector } from 'react-redux'
//import { useFirestoreConnect } from 'react-redux-firebase'
//import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue, child, get} from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase, {db} from '../../config/fbconfig'
import NotesList from '../notes/NotesList';
//import { getFirestore} from 'redux-firestore';

const Home = () => {
  //const db = getDatabase();
  //const starCountRef = ref(db);
  //console.log(starCountRef);
  /*const dbRef = ref(getDatabase());
  get(child(dbRef, `notes/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });*/
  //const notedbref = ref(db, 'notes/');
  //const childnote = child(dbref, '/notes')
  //onValue(notedbref, (snapshot) => {
  //  const data = snapshot.val();
  //});
  let notitasArr = []; 
  async function getNotes(db) {
    const notesCol = collection(db, 'notes');
    const noteSnapshot = await getDocs(notesCol);
    noteSnapshot.forEach((doc) => {
      //console.log(doc.id)      
      //console.log(doc.data())
      notitasArr.push(doc.data())    
    })
    const noteList = noteSnapshot.docs.map(doc => doc.data());
    return noteList;
  }

  let notes = getNotes(db)
  //let notitas = notes.then(response => response  )
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

