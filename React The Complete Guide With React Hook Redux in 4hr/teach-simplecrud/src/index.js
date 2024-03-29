import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker'
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'
import firebase from "firebase/compat/app"
import db from './config/fbconfig'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(db)
))

const rrfProps = {
  firebase,
  config: db,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
