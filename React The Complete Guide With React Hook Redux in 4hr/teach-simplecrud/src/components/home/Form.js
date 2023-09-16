import React from 'react'
import useInput from '../../customhook/useInput'
import {addNote} from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput()
  const [content, bindContent, resetContent] = useInput()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, content)
    addNote({title, content})
    resetTitle()
    resetContent()
  }
  return (
    <div className='section'>
      <form onSubmit={handleSubmit} className="">
        <div className='message is-info'>

          <div className='message-header'>
            <input className="input is-rounded is-medium" type="text" {...bindTitle} placeholder="Titulo nota..."/>
          </div>
          <div className="message-body">
            <textarea className="textarea is-medium" {...bindContent} placeholder="Contenido nota..." rows="5"></textarea>
            <button className="button is-success is-medium">Add</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Form