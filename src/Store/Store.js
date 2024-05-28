import { combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk'; // Use named import for thunk
import quizReducer from '../reducers/CreateQuizReducer';
import  thunk  from 'redux-thunk';
import rootReducer from '../reducers';
import { createStoreHook } from 'react-redux';

const middleware = [thunk];
const composedEnhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composedEnhancer)

// Create store with thunk middleware


export default store;