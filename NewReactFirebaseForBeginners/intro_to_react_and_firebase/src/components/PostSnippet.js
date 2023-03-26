import React from 'react'
import Card from './Card'
//import {Link} from "@reach/router"

const PostSnippet = (props) => {
  return (
    <div className='post_snippet_container'>
      <Card 
        id={props.id}
        title={props.title} 
        content={props.content}
        //extra={<Link to='/post/${props.id}'>Read full article</Link>}
      ></Card>
    </div>
  )
}

export default PostSnippet