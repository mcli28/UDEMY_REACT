import React, {useState,useEffect} from 'react'
import PostSnippet from './PostSnippet'
import PageHeader from './PageHeader'
//import api from '../mock_api'
import _ from 'lodash'
import {collection, getDocs} from 'firebase/firestore/lite';
import db from '../firebase'

const Posts = (props) => {

  const [posts, setPosts] = useState([])

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

  }, [])
  return (
    <div className='column'>
        <div className='page_header_container'>
          <PageHeader title="Posts"></PageHeader>
        </div>
        <div className='articles_container'>
          {console.log(posts)};
          {
            _.map(posts, (article, idx) => {
              return (
                <PostSnippet 
                  key={idx} 
                  id={article.id} 
                  title={article.title} 
                  content={article.content.substring(1, 1000)}
                />
              )
            })
          }               
        </div>
    </div>
  )
}

export default Posts