import React from 'react'
import useInput from '../../customhook/useInput'
const Form = () => {
  const [title, bindTitle, resetTitle] = useInput()
  const [content, bindContent, resetContent] = useInput()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({title, content})
    resetTitle()
    resetContent()
  }
  return (
    <div className='section'>
        <form action=''>
            <h5>New Note</h5>
            <input className="input is-rounded is-medium" type="text" {...bindTitle} placeholder="Rounded input"/>
            <textarea className="textarea is-medium" {...bindContent} placeholder="10 lines of textarea" rows="10"></textarea>
            <button className=''>Add</button>
        </form>
    </div>
  )
}

export default Form