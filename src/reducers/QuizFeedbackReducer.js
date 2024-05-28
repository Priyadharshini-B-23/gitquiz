import React from 'react'

import { 
    CREATE_QUIZFEEDBACK_REQUEST,
    CREATE_QUIZFEEDBACK_SUCCESS,
    CREATE_QUIZFEEDBACK_FAILURE,
  } from '../../src/actions/QuizFeedbackAction';
  
  const initialState = {
    
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
  
  const QuizFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_QUIZFEEDBACK_REQUEST:
        
        return {
          ...state,
          loading: true,
        };
      case CREATE_QUIZFEEDBACK_SUCCESS:
        console.log('quiz reducer', action.payload);
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted:true,
          error: null,
        };
       
      case CREATE_QUIZFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };

export default QuizFeedbackReducer