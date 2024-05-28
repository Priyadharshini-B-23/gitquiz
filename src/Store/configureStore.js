import { createStore, combineReducers, applyMiddleware } from "redux";
import quizReducer from "../reducers/quizReducer";
import thunk from "redux-thunk"; // Corrected import
import { quizIdReducer } from "../reducers/CreateQuizReducer";
import { QuizFeedbackApi } from "../middleware/QuizFeedbackApi";
import QuizFeedbackReducer from "../reducers/QuizFeedbackReducer";
import TopicFeedbackReducer from "../reducers/TopicFeedbackReducer";
import { TopicFeedbackApi } from "../middleware/TopicFeedbackApi";
import GetAllFeedbackReducer from "../reducers/GetAllFeedbackReducer";
import { GetAllFeedbackApi } from "../middleware/GetAllFeedbackApi";
import GetTopicFeedbackReducer from "../reducers/GetTopicFeedbackReducer";
import { GetTopicFeedbackApi } from "../middleware/GetTopicFeedbackApi";
import UpdateQuizFeedbackReducer from "../reducers/UpdateQuizFeedbackReducer";
import { UpdateQuizFeedbackApi } from "../../src/middleware/UpdateQuizFeedbackApi";
import GetByIDQuizFeedbackReducer from "../reducers/GetByIDQuizFeedbackReducer";
import GetByIDFeedbackApi from "../middleware/GetByIDFeedbackApi";
import DeleteQuizFeedbackReducer from "../reducers/DeleteQuizFeedbackReducer";
import DeleteQuizFeedbackApi from "../middleware/DeleteQuizFeedbackApi";
import DeleteTopicFeedbackReducer from "../reducers/DeleteTopicFeedbackReducer";
import DeleteTopicFeedbackApi from "../middleware/DeleteTopicFeedbackApi";

const rootReducer = combineReducers({
  quizfeedback: QuizFeedbackReducer,
  TopicFeedback: TopicFeedbackReducer,
  fetchfeedback: GetAllFeedbackReducer,
  fetchtopicfeedback: GetTopicFeedbackReducer,
  quiz: quizReducer,
  updatequizfeedback: UpdateQuizFeedbackReducer,
  fetchquizfeedbackid: GetByIDQuizFeedbackReducer,
  deletequizfeedback: DeleteQuizFeedbackReducer,
  deletetopicfeedback: DeleteTopicFeedbackReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    QuizFeedbackApi,
    TopicFeedbackApi,
    GetAllFeedbackApi,
    GetTopicFeedbackApi,
    UpdateQuizFeedbackApi,
    GetByIDFeedbackApi,
    DeleteTopicFeedbackApi,
    DeleteQuizFeedbackApi
  )
);

export default store;
