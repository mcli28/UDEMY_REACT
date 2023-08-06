import './App.css';
import React, {useState, useEffect}  from 'react'
import {useNavigate, useParams} from "react-router-dom";

import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

import db from './firebase'
import {auth} from './firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {onSnapshot, collection, doc, setDoc, updateDoc, getDoc} from 'firebase/firestore';


function App(props) {
  
  const userlsuid = window.localStorage.getItem('useruid')
  const [user, setUser] = useState(null)
  //const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [useruid, setUseruid] = useState(false)

  const create_post = (uid, title, content) => {
    console.log(uid)
    setUseruid(uid)
    async function addpost(db) {
      const userCollRef = collection(db, 'users')
      const postref = doc(collection(db, "posts"))

      console.log(userCollRef)
      const userColRef = doc(collection(db, 'users', uid, 'postsusers'))
      /*const userSnapshot = await getDoc(nuevaColeccionRef)
        .then(doc => {
          console.log(doc);
          //let {content, title} = doc.data()
        })
      console.log(userSnapshot)*/

      
      await setDoc(postref, {
        id: postref.id,
        title: title,
        content: content
      });
      await setDoc(userColRef, {
        id: userColRef.id,
        title: title,
        content: content
      });
    }
    
    addpost(db).then((res) => {
      console.log("adicionado")
    })
  }

  const update_post = (id, title, content) => {
    console.log("update", id)
    async function editpost(db) {
      const postref = doc(db, 'users', userlsuid, 'postsusers', id)

      await updateDoc(postref, {
          //id: postref.id,
          title: title,
          content: content
      });
      
    }
      
    editpost(db).then(function (doc) {
      console.log("Editado");
      setTitle('')
      setContent('')
    })
  }
  
  /*const signIn_user= (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userC = userCredential.user;
          console.log("user signed in")
          console.log(userC)
          setUser(userC)
          //navigate("/posts")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
  }*/

  useEffect(() => {
    onAuthStateChanged(auth, (userA) => {
      if (userA) {
        const uid = userA.uid;
        console.log("user is signed in")
        setUser(userA)
      } else {
        console.log("user is not signed in")
      }
      setUser(userA)
    })
    /*const onsnapshot = onSnapshot(collection(db, 'users', user.uid, 'postsusers'),
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
    )*/

  }, [])

  return (
    <div className="app_container">
      <div className='columns'>
        <div className='column'>
        
        <Router>
          <Navbar user={user}/>
          <Routes>
            <Route path='/' element={<Posts user={user} useruid={useruid}/>}/>
            <Route path="posts" element={<Posts user={user}/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='signin' element={<SignIn user={user}/>}/>
            <Route path="createpost" element={<CreatePost create={create_post} user={user}/>}/>
            <Route path="updatepost/:id" element={<UpdatePost title={title} content={content} update={update_post}/>}/>
            <Route path="deletepost/:id" element={<DeletePost delete={update_post}/>}/>
            <Route path="post/:id" element={<Post/>}/>
          </Routes>
        </Router>
        </div>
      </div>
    </div>
  )
}

export default App;
