import React, {useState} from 'react'
import './App.css'
import Card from './Card';
import { faker } from '@faker-js/faker';

function App() {
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)

  const changeNameHandler = name => setName(name)
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)

  const buttonsMarkup = (
    <div>Investor Integration Consultant
      <button className='button button2'>YES</button>
      <button className='button button3'>NO</button>
    </div>
  )
  const cardsMarkup = showCard && <Card
    avatar='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/531.jpg' 
    name={name} 
    title='Investor Integration Consultant'
    onChangeName={()=>changeNameHandler('Michael Chan')}
    onChangeInput={changeInputHandler}
    >
      {buttonsMarkup}
  </Card>
  
  return (
    <div className="App">
      <button className='button' onClick={toggleShowCard}>Toggle show/hide</button>
      {cardsMarkup}
     
    </div>
  );
}

export default App;
