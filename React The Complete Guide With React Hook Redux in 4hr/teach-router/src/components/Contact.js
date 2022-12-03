import React from 'react'
import {faker} from '@faker-js/faker'

const Contact = () => {
  return (
    <div className='container'>
        <p>Contact</p>
        <p>{`${faker.lorem.paragraph()}`}</p>
    </div>
  )
}

export default Contact