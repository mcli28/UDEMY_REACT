import React, {useState, useEffect}  from 'react'
import PostSnippet from './PostSnippet'
import PageHeader from './PageHeader'
import _ from 'lodash'
//import { BrowserRouter as Router, Switch, Route, Routes, useNavigate, Navigate, redirect, withRouter } from 'react-router-dom';

const Posts = (props) => {

  /*const [posts, setPosts] = useState([])

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

  }, [])*/

  return (
    <div className='column'>
        <div className='page_header_container'>
          <PageHeader title="Posts"></PageHeader>
        </div>
        <section className='section has-background-grey-lighter'>
            {
              _.map(props.posts, (article, idx) => {
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