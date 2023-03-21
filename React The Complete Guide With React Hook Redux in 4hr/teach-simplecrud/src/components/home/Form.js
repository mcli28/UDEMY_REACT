import React from 'react'
import useInput from '../../customhook/useInput'
import { NoteAction } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput()
  const [content, bindContent, resetContent] = useInput()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(NoteAction({title, content}))
    resetTitle()
    resetContent()
  }
  return (
    <div className='section'>
        <form onSubmit={handleSubmit} className="">
            <h5>New Note</h5>
            <input className="input is-rounded is-medium" type="text" {...bindTitle} placeholder="Rounded input"/>
            <textarea className="textarea is-medium" {...bindContent} placeholder="10 lines of textarea" rows="10"></textarea>
            <button className="button is-success is-medium">Add</button>
        </form>
    </div>
  )
}

export default Form