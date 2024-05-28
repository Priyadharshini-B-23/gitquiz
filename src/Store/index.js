// index.js (or wherever your main application component is)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you're using async actions
import rootReducer from '../reducers/index'; // Assuming this is your root reducer
import App from '../App' // Your main application component
import store from './configureStore';

// Create the Redux store with the root reducer and any middleware
// const store = createStore(rootReducer, applyMiddleware(thunk,QuizFeedbackApi)); // applyMiddleware is optional, use it if you have middleware like thunk

// Wrap your application with the Redux Provider and pass the store as a prop
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);