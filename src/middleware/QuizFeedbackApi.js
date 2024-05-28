import axios from 'axios';
import { CREATE_QUIZFEEDBACK_REQUEST,createquizfeedbackSuccess,createquizfeedbackFailure, createquizfeedbackRequest, CREATE_QUIZFEEDBACK_SUCCESS } from '../actions/QuizFeedbackAction';

const API_URL = 'http://localhost:5199/api/QuizFeedback/AddFeedbackQuestion';

export const QuizFeedbackApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type == CREATE_QUIZFEEDBACK_REQUEST) {
    try {
      console.log("post quiz",action.payload);
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.post(API_URL,action.payload);
      console.log('feed Post API Response:', response.data); // Log the response data
      dispatch(createquizfeedbackSuccess(response.data.data)); // Dispatch success action with the response data                                             
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(createquizfeedbackFailure(error.message));
    }
  }
  return next(action);
  
};





