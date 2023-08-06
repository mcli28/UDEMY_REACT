import React, {useState, useEffect, useContext}  from 'react'
import PostSnippet from './PostSnippet'
import PageHeader from './PageHeader'
import _ from 'lodash'
import db from '../firebase'

//import { setDoc, getDocs, getDoc} from 'firebase/firestore/lite';
import {onSnapshot, collectionGroup, collection, query, doc, getDoc} from 'firebase/firestore';

const Posts = (props) => {

  const userlsuid = window.localStorage.getItem('useruid')
  const userls = window.localStorage.getItem('user')
  //console.log("userlsuid",userlsuid)
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    
    const onsnapshot = onSnapshot(collection(db, 'users', userlsuid, 'postsusers'),
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
    //return () => onsnapshot();
    
  }, [])
  
  //console.log(posts)
  
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
                    user = {userls}
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