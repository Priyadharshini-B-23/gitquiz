import CreateQuiz from "../components/QuizComponents/CreateQuiz";
import { Provider } from 'react-redux';
import store from "../Store/Store";
import QuestionTemplate from "../components/QuizComponents/QuestionTemplate";

function QuizHomeView() {
  return (
    <>
      <Provider store={store}>
        <CreateQuiz />
        <QuestionTemplate/>
      </Provider>
    </>
  );
}

export default QuizHomeView;