import { applyMiddleware, createStore } from 'redux';
import fileReducer from '../reducers/fileReducer';
import QuizFeedbackReducer from '../reducers/QuizFeedbackReducer';
import rootReducer from '../reducers';
import { thunk } from 'redux-thunk';
import { QuizFeedbackApi } from '../middleware/QuizFeedbackApi';
import { TopicFeedbackApi } from '../middleware/TopicFeedbackApi';


const store = createStore(
  rootReducer,
 applyMiddleware(thunk,QuizFeedbackApi,TopicFeedbackApi)
);

export default store;
