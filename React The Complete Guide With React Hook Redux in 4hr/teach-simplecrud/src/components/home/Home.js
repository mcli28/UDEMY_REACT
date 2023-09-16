import React, {useState, useEffect} from 'react'
import Form from './Form'
import {onSnapshot, collection} from 'firebase/firestore';
import db from '../../config/fbconfig'
import NotesList from '../notes/NotesList';
//import { useFirestoreConnect, useFirebaseConnect } from 'react-redux-firebase';
//import { useSelector } from 'react-redux';
const Home = () => {
  
  const [posts, setPosts] = useState([])
  useEffect(() => {
    //useFirestoreConnect([{collection:'notes', orderBy:['created', 'desc']}])
    //useFirebaseConnect('notes')
    //const notes = useSelector((state) => state.firestore.ordered.notes)
      const onsnapshot = onSnapshot(collection(db, 'notes'),
        (posts) => {
          const postsData = posts.docs.map(post => {
            let data = post.data()
  
            let {id} = post  
            let payload = {
              id,
              ...data
            }
            return  payload
          })
          setPosts(postsData)    
        }
      )
      return () => onsnapshot();
    }, [])
    

  return (
    <div className='container'>
        <div className='columns'>
            <div className='column is-half'>
              <Form/>
            </div>
            <div className='column'>
              <NotesList notes={posts} />
            </div>
        </div>
    </div>
  )
}

export default Home

