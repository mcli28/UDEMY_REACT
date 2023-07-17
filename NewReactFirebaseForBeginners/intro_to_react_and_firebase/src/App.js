import './App.css';
import React, {useState, useEffect}  from 'react'
import {useNavigate, useParams} from "react-router-dom";

import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost'
import CreateForm from './components/CreateForm'
import UpdatePost from './components/UpdatePost';
import UpdateForm from './components/UpdateForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
//import {Router, Link } from "@reach/router";
import {auth} from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import {collection, doc, setDoc, getDocs, getDoc} from 'firebase/firestore/lite';
import db from './firebase'

function App(props) {
  //let navigate = useNavigate()

  //const [user, setUser] = useState(false)
  //onAuthStateChanged(auth, (user) => {
  //  if (user) {
  //    // User is signed in, see docs for a list of available properties
  //    // https://firebase.google.com/docs/reference/js/firebase.User
  //    const uid = user.uid;
  //    console.log("user is signed in")
  //    console.log(user)
  //    setUser(user)
  //  } else {
  //    console.log("no user is signed in")
  //  }
  //})

 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])


  const create_post = (title, content) => {
    console.log(title)
    console.log(content)

    async function addpost(db) {
      const postref = doc(collection(db, "posts"))

      await setDoc(postref, {
          id: postref.id,
          title: title,
          content: content
      });
      
    }
    
    addpost(db).then((res) => {
      console.log("adicionado")
    })
  }

  const update_post = (title, content) => {
    console.log("update")
    async function editpost(db) {
      const postref = doc(collection(db, "posts"))

      await setDoc(postref, {
          id: postref.id,
          title: title,
          content: content
      });
      
    }
      
    editpost(db).then(function (doc) {
      console.log("Editado");
      setTitle('')
      setContent('')
      //navigate("/posts")
    })
  }

  useEffect(() => {
    

    async function getPosts(db) {
      const postsCol = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCol);
      postsSnapshot.forEach((doc) => {
        let data = doc.data()
        let {id} = doc
        let payload = {
          id,
          ...data
        }
        setPosts((posts) => [...posts, payload])    
      })
    }
    getPosts(db)

    /*async function getPost(db) {
      const postRef = doc(db, 'posts', id);
      const postSnapshot = await getDoc(postRef)
        .then(doc => {
          console.log(doc);
          let {content, title} = doc.data()
          setTitle(title)
          setContent(content)
        })
    }

    getPost(db)*/

  }, [])

  return (
    <div className="app_container">
      <div className='columns'>
        <div className='column'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path="createpost" element={<CreatePost create={create_post} />}/>
            <Route path="posts" element={<Posts posts={posts}/>}/>
            <Route path="updatepost/:id" element={<UpdatePost title={title} content={content} update={update_post}/>}/>
            <Route path="post/:id" element={<Post/>}/>
          </Routes>
        </Router>
        </div>
      </div>
    </div>
  )
}

export default App;

/*class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      itemsB: {}
    }
  }

  render(){
    return (
      <div className="app_container">
        <div className='columns'>
          <div className='column'>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Posts/>}/>
              <Route path='signup' element={<SignUp/>}/>
              <Route path='signin' element={<SignIn/>}/>
              <Route path="createpost" element={<CreateForm createPost={this.createPost.bind(this)}/>}/>
              <Route path="posts" element={<Posts items={this.state.itemsB} listPosts={this.listPosts.bind(this)}/>}/>
              <Route path="/updateform/:id" element={<UpdateForm id="" updatePost={this.updatePost.bind(this)}/>}/>
              
              <Route path="post/:id" element={<Post/>}/>
            </Routes>
          </Router>
          </div>
        </div>
      </div>
    );
  }

  createPost(title, content){
    console.log(title)
    console.log(content)

    async function addpost(db) {
      const postref = doc(collection(db, "posts"))

      await setDoc(postref, {
          id: postref.id,
          title: title,
          content: content
      });
      
    }
    
    addpost(db).then((res) => {
      console.log("adicionado")
    })
  }

  updatePost(title, content){
    console.log("en el updatepost")
  }

  componentDidMount() {
    let itemArr = [];
    const db2 = db// initialize your database object or connection here
    this.listPosts(itemArr, db2);
  }
  
  listPosts(itemsA, db2) {
    function getPosts(db2) {
      const postsCol = collection(db2, 'posts');
      return getDocs(postsCol);
    }
  
    getPosts(db2).then((res) => {
      const itemsB = res.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return {
          id,
          ...data
        };
      });
  
      this.setState({ itemsB });
    });
  }
}

export default App;


updatePost(title, content){
  
  console.log("en el updatepost")
  async function getPost(db) {
    const postRef = doc(db, 'posts', id);
    const postSnapshot = await getDoc(postRef)
      .then(doc => {
        console.log(doc);
        let {content, title} = doc.data()
        setTitle(title)
        setContent(content)
      })
  }

  getPost(db)

  const onUpdatePost = () => {
    console.log("update")
    async function editpost(db) {
        const postref = doc(collection(db, "posts"))

        await setDoc(postref, {
            id: postref.id,
            title: title,
            content: content
        });
        
      }
      
      editpost(db).then(function (doc) {
        console.log("Editado");
      })
  }
}*/