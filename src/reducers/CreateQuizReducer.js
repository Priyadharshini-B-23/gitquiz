// reducers/CreateQuizReducer.js
import { FETCH_QUIZ_SUCCESS, SET_QUIZ_DETAILS } from "../actions/CreateQuizAction";
import { FETCH_QUIZ_REQUEST } from "../actions/CreateQuizAction";
import { FETCH_QUIZ_ID_REQUEST, FETCH_QUIZ_ID_SUCCESS, FETCH_QUIZ_ID_FAILURE } from "../actions/CreateQuizAction";
const initialState = {

    nameofquiz: '',
    duration: '',
    passMark: '',
    attemptsAllowed: '',
    error: '',
};

const initialEditQuiz = {
    nameofquiz: '',
    duration: '',
    passMark: '',
    attemptsAllowed: '',
}

const intialQuizIdState = {
    quizId: null,
    loading: false,
    error: null
}

export const quizIdReducer = (state = intialQuizIdState, action) => {
    switch (action.type) {
        case FETCH_QUIZ_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUIZ_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                quizId: action.payload,
                error: null
            };
        case FETCH_QUIZ_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export function editQuizReducer(state = initialEditQuiz, action) {
    switch (action.type) {
        case FETCH_QUIZ_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.payload,
                error: null
            };
        default:
            return state;
    }
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {


        case SET_QUIZ_DETAILS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

