import React from 'react'
import {faker} from '@faker-js/faker'

const About = () => {
  return (
    <div className='container'>
      <p>About</p>
      <p>{`${faker.lorem.paragraph()}`}</p>
    </div>
    
  )
}

export default About