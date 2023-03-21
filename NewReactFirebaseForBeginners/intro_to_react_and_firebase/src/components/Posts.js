import React from 'react'
import PostSnippet from './PostSnippet'
import PageHeader from './PageHeader'
import api from '../mock_api'
import _ from 'lodash'

const Posts = (props) => {
  return (
    <div className='column'>
        <div className='page_header_container'>
          <PageHeader></PageHeader>
        </div>
        <div className='articles_container'>
          {
            _.map(api, (article, idx) => {
              return (
                <PostSnippet key={idx} id={idx} title={article.title} content={article.content} />
              )
            })
          }               
        </div>
    </div>
  )
}

export default Posts