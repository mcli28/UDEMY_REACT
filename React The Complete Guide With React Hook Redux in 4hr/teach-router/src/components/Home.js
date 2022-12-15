import React, {useEffect} from 'react'
import {faker} from '@faker-js/faker'
const Home = () => {
  return (
    <div className='container'>
        <h4 className='center'>Home</h4>
        <p>{`${faker.lorem.paragraph()}`}</p>
    </div>
  )
}

export default Home