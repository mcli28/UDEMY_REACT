import React from 'react'
import {faker} from '@faker-js/faker'
const Home = () => {
  return (
    <div className='container'>
        <h4 className='center'>
          <p>Home</p>
          <p>{`${faker.lorem.paragraph()}`}</p>
        </h4>
    </div>
  )
}

export default Home