// reducers.js
import { combineReducers } from 'redux';

import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '../actions/GetAllQuestionAction';

const initialState = {
  questions: [],
  loading: false,
  error: null
};

 const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
        error: null
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default questionReducer;