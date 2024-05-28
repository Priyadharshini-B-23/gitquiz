import CreateQuiz from "../components/QuizComponents/CreateQuiz";
import { Provider } from 'react-redux';
import store from "../Store/Store";
import '../Styles/CreateQuiz.css'
import { QuestionTemplate } from "../components/QuizComponents/QuestionTemplate";

function CreateQuizView() {
  return (
    <>
      <Provider store={store}>
        <CreateQuiz />
        <QuestionTemplate/>
      </Provider>
    </>
  );
}

export default CreateQuizView;