import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store/configureStore';
import QuizEditor from '../components/QuizEditor';


const QuizEditorView = () => {
  return (
    <Provider store={store}>
      <QuizEditor />
    </Provider>
  );
};

export default QuizEditorView;