import React from 'react'
import Note from './Note'

const NotesList = ({notes}) => {
  return (
    <div className='noteslist'>
      {
        notes && notes.map(nota => <Note note={nota} key={nota.id} />)
      }
    </div>
  )
}

export default NotesList