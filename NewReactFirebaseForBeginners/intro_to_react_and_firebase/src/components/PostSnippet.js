import React from 'react'
import Card from './Card'

const PostSnippet = (props) => {
  return (
    <div className='post_snippet_container'>
      <Card 
        id={props.id}
        title={props.title} 
        content={props.content}
        user={props.user}
      ></Card>
    </div>
  )
}

export default PostSnippet