import React, {useState, useEffect}  from 'react'
import PostSnippet from './PostSnippet'
import PageHeader from './PageHeader'
import _ from 'lodash'


import db from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
//import { setDoc, getDocs, getDoc} from 'firebase/firestore/lite';
import {onSnapshot, collectionGroup, collection, query, doc} from 'firebase/firestore';

const Posts = (props) => {
  console.log(props)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    /*async function getPosts(db) {
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
    getPosts(db)*/
    

  
    //const onsnapshot = onSnapshot(collection(db, 'users'),
    const onsnapshot = onSnapshot(collection(db, 'posts'),
      (posts) => {
        console.log(posts)
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
    //onsnapshot()
  }, [])
  
  
  
  return (
    <div className='column'>
        <div className='page_header_container'>
          <PageHeader title="Posts"></PageHeader>
        </div>
        <section className='section has-background-grey-lighter'>
            {
              _.map(posts, (article, idx) => {
                return (
                  <PostSnippet 
                    key={idx} 
                    id={article.id} 
                    title={_.capitalize(article.title)} 
                    content={article.content.substring(1, 1000)}
                    user={props.user}
                  />
                )
              })
            }               
        </section>
    </div>
  )
}


/*class Posts extends Component {

  renderItems(){

    return _.map(this.props.items, (article, idx) => {
      return (
        <PostSnippet 
          key={idx} 
          id={article.id} 
          title={_.capitalize(article.title)} 
          content={article.content.substring(1, 1000)}
        />
      )
    })   
  }

  render(){
    return (
      <div className='column'>
          <div className='page_header_container'>
            <PageHeader title="Posts"></PageHeader>
          </div>
          <section className='section has-background-grey-lighter'>
            {this.renderItems()}
          </section>
      </div>
    )
  }
}*/

export default Posts