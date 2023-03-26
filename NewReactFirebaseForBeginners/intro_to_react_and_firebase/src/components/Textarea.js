import React from 'react'

const Textarea = (props) => {
  return (
    <textarea className="textarea is-small" placeholder="Small textarea" rows={props.rows}></textarea>
  )
}

export default Textarea