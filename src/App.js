import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizEditorView from './View/QuizEditorView';
import CreateQuizView from './View/CreateQuizView';
import QuizEditor from './components/QuizEditor';
import { QuestionTemplate } from './components/QuizComponents/QuestionTemplate';
import { Provider } from 'react-redux';
// import store from './store/configureStore'; 
// import store from './Store/fileConfigureStore';
import UploadBulkQuiz from './components/QuizComponents/UploadBulkQuiz';
import CoursePage from "./components/QuizComponents/CoursePage";
import ReviewQuestions from './components/QuizComponents/ReviewQuestions';
import QuizFeedback from './components/QuizComponents/QuizFeedback';
import './App.css'
import './Styles/CoursePage.css'
import './Styles/CreateQuiz.css'
import  GetAllFeedbacks  from './components/QuizComponents/GetAllFeedbacks';
import QuestionTemplateView from './View/QuestionTemplateView';
import TopicFeedback from './components/QuizComponents/TopicFeedback';
import store from './Store/configureStore';
import GetTopicFeedback from './components/QuizComponents/GetTopicFeedback';




function App() {
  return (
      <Routes>
        <Route path="/quiz" element={<QuizEditor />} />
        {/* <Route path="/" element={
          <Provider store={store}>
            <div>
            <CoursePage/>
            </div>
          </Provider>
        }/> */}
        
        
        <Route path="/" element={<CoursePage/>}/>
        <Route path="/createquiz" element={<CreateQuizView/>}/>  
        <Route path='/questiontemplate' element={<QuestionTemplateView/>}/>
        <Route path='/getallfeedback' element={<GetAllFeedbacks/>}/>
        {/* <Route path='/reviewquestions' element={<ReviewQuestions/>}/> */}
        <Route path='/reviewquestions' element={
          <Provider store={store}>
            <div>
            <ReviewQuestions/>
      
            </div>
          </Provider>
        } />

      <Route path='/topicfeedback' element={
          <Provider store={store}>
            <div>
            <GetTopicFeedback/>
      
            </div>
          </Provider>
        } />

         <Route path='/quizfeedback' element={
          <Provider store={store}>
            <div>
            <GetAllFeedbacks/>
            {/* <GetTopicFeedback/> */}
            </div>
          </Provider>
        } />
        
        <Route path='/upload' element={
          <Provider store={store}>
            <div>
              <UploadBulkQuiz />
      
            </div>
          </Provider>
        } />
      </Routes>

  )};
export default App;



















// import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import QuizEditorView from './view/QuizEditorView';


// function App() {
//   return (
//     <div className="App">
//      <Routes>
//         <Route path="quizEditorview" element={<QuizEditorView/>} /> 
//       </Routes>
//     </div>
    
//   );
// }
// export default App;
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;