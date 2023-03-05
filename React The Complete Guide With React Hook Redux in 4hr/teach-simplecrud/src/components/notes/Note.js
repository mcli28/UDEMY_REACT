import React from 'react'

const Note = ({note}) => {
    console.log("note");
    console.log(note);
  return (
    <div className='note white'>
      <div className='right-align'>
        <i className='fas fa-heart'></i> favorite
        <i className='fas fa-trash'></i> delete
        {note.title}
      </div>
    </div>
  )
}

export default Note