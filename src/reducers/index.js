// reducers/index.js
// import { combineReducers} from 'react-redux';
// import quizReducer from './CreateQuizReducer';
import { combineReducers } from 'redux';
import quizReducer from './CreateQuizReducer';
import { editQuizReducer } from './CreateQuizReducer';
import questionReducer from './GetAllQuestionReducers';
import QuizFeedbackReducer from './QuizFeedbackReducer';

const rootReducer = combineReducers({
  // quiz:rootReducer
  quiz:quizReducer,
  questions: questionReducer,
  editQuiz:editQuizReducer,
  quizfeedback:QuizFeedbackReducer
  // // ... other reducers ...
});

export default rootReducer;
