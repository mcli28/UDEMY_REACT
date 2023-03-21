import React, {useState, useEffect} from 'react'
import PageHeader from './PageHeader'
import Card from './Card'
import api from '../mock_api'

/*var content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.`*/

/*{content.split('\n').map((paragraph, idx) => {
  return <p key={idx}>{paragraph}</p>
})}*/              
const Post = (props) => {
  console.log(props)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  useEffect(() => {
    let post = api(props.id) 
    console.log('post');
    console.log(post);
  })
  return (
    <div className="post_container">
      <div className='page_header_container'>
        <PageHeader 
          title={title}></PageHeader>
      </div>
      <div className='post_content_container'>
        <Card>
        </Card>
      </div>
    </div>
  )
}

export default Post