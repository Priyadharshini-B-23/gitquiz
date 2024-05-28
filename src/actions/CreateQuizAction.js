// Action types
export const SET_QUIZ_DETAILS = 'SET_QUIZ_DETAILS';
export const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';

export const FETCH_QUIZ_ID_REQUEST = 'FETCH_QUIZ_ID_REQUEST';
export const FETCH_QUIZ_ID_SUCCESS = 'FETCH_QUIZ_ID_SUCCESS';
export const FETCH_QUIZ_ID_FAILURE = 'FETCH_QUIZ_ID_FAILURE';

export const fetchQuizByIdRequest = () => ({
    type: FETCH_QUIZ_REQUEST
});
export const fetchQuizByIdSuccess = editQuiz => ({
    type: FETCH_QUIZ_SUCCESS,
    payload: editQuiz
});

export const setQuizDetails = quizDetails => ({
    type: SET_QUIZ_DETAILS,
    payload: quizDetails
});
export const setNameofQuiz = nameofquiz => ({
    type: 'SET_NAME_OF_QUIZ',
    payload: nameofquiz,
});
export const setDuration = duration => ({
    type: 'SET_DURATION',
    payload: duration,
});
export const setPassMark = passMark => ({
    type: 'SET_PassMark',
    payload: passMark,
});
export const setAttempts = attempts => ({
    type: 'SET_ATTEMPTS',
    payload: attempts,
});
export const setError = error => ({
    type: 'SET_ERROR',
    payload: error,
});

export const fetchQuizIdRequest = () => ({
    type: FETCH_QUIZ_ID_REQUEST
});
export const fetchQuizIdSuccess = (quizId) => ({
    type: FETCH_QUIZ_ID_SUCCESS,
    payload: quizId
});
export const fetchQuizIdFailure = (error) => ({
    type: FETCH_QUIZ_ID_FAILURE,
    payload: error
});


