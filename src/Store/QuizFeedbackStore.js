
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import QuizFeedbackReducer from '../reducers/QuizFeedbackReducer';
import QuizFeedbackApi from '../middleware/QuizFeedbackApi';
 
 
 
const rootReducer = combineReducers({
   quizfeedback:QuizFeedbackReducer,
  });
 
  const QuizFeedbackStore = createStore(
    rootReducer,
    applyMiddleware(thunk,QuizFeedbackApi ) // Corrected middleware application
  );
 
 
export default QuizFeedbackStore;