import axios from 'axios';
import { FETCH_QUIZFEEDBACK_REQUEST,fetchquizfeedbackSuccess,fetchquizfeedbackFailure} from '../actions/GetByIDFeedbackAction';
const API_URL = 'http://localhost:5199/api/QuizFeedback/GetFeedbackQuestionById';

export const GetByIDFeedbackApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type == FETCH_QUIZFEEDBACK_REQUEST) {
    try {
      console.log("fetch quiz feedback",action.payload);
      // Assuming 'action.payload' contains the data you want to senda
      const url = `${API_URL}/${action.payload}`
      const response = await axios.get(url);
      debugger
      console.log('Get API Response:', response.data); // Log the response data
      dispatch(fetchquizfeedbackSuccess(response.data)); // Dispatch success action with the response data                                             
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchquizfeedbackFailure(error.message));
    }
  }
  return next(action);
  
};

export default GetByIDFeedbackApi
