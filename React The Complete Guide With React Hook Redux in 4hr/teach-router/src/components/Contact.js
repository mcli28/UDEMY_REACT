import React from 'react'
import {faker} from '@faker-js/faker'

const Contact = (props) => {
  //console.log('contact', props);
  //setTimeout(() => {
  //  props.history.push('/about')
  //}, 2000)
  return (
    <div className='container'>
        <h4 className='center'>Contact</h4>
        <p>{`${faker.lorem.paragraph()}`}</p>
    </div>
  )
}

export default Contact