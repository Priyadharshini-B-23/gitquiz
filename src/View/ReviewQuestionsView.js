import React from 'react';
import { Provider } from 'react-redux';
import store from "../Store/Store";
import '../Styles/CreateQuiz.css'
import ReviewQuestions from '../components/QuizComponents/ReviewQuestions';

function ReviewQuestionsView() {
  return (
    <div>
      <Provider store={store}>
        <ReviewQuestions/>
      </Provider>
    </div>
  )
}

export default ReviewQuestionsView