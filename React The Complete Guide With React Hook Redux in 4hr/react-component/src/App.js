import React from 'react'
import './App.css'
import Card from './Card';
import { faker } from '@faker-js/faker';

function App() {

  const buttonsMarkup = (
    <div>
      <button className='button button2'>YES</button>
      <button className='button button3'>NO</button>
    </div>
  )

  return (
    <div className="App">
      <Card
        avatar={faker.image.avatar()} 
        name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
        title={faker.name.jobTitle()}>
          {buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.avatar()} 
        name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
        title={faker.name.jobTitle()}>
          {buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.avatar()} 
        name={`${faker.name.firstName()} ${faker.name.firstName()}`} 
        title={faker.name.jobTitle()}>
          {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
