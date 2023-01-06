import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

//actions
const increment = (value) => {
  return {type: 'INCREMENT', payload: value}
}
const decrement = () => {
  return {type: 'DECREMENT'}
}
//reducers
const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state+action.payload
      break
    case 'DECREMENT':
      return state-1
      break
    default:
      return state
      break;
  }
}
//Create a store
let store = createStore(counterReducer)
//display
store.subscribe(() => {
  console.log(store.getState());
})
//Dispatch the action
store.dispatch(increment(5))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
