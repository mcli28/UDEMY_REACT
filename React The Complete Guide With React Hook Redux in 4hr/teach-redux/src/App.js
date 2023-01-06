import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, auth } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state=>state.counter)
  const login = useSelector(state=>state.login)
  const dispatch = useDispatch()
  const btnText = login ? 'logout' : 'login'
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <p>{login?<h3>Logined</h3>:<h3>Not yet logined</h3>}</p>
      <button onClick={()=>dispatch(auth())}>{btnText}</button>
    </div>
  );
}

export default App;
