import axios from 'axios';
import { useState } from 'react';
import { fetchQuizByIdSuccess, fetchQuizByIdRequest } from '../actions/CreateQuizAction';

export const FindQuiz = async (topicId) => {
  try {
    const response = await axios.get(`http://localhost:5199/api/Quiz/topic/${topicId}`);
    console.log("Api: ",response.data)
    return response.data;
  } catch (error) {
    console.log("Fetching quizid: ",error.message)
  }
};

const createquiz = async (quizDetails) => {
  try {
    console.log("details", quizDetails);
    const response = await axios.post('http://localhost:5199/api/Quiz', quizDetails);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
};

export const GetQuizDetails = async(quizId) =>{
  try {
    const response = await axios.get(`http://localhost:5199/api/Quiz/${quizId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}

export const PutQuizDetails = async(updatedQuizData) =>{
  try{
    const response = await axios.put(`http://localhost:5199/api/Quiz/${updatedQuizData.quizId}`, updatedQuizData)
    console.log("Quiz edited successful",response.data);
  }catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}


export const DeleteQuizDetails = async(quizId) =>{
  console.log("delete quiz: ",quizId);
  try{
    const response = await axios.delete(`http://localhost:5199/api/Quiz/${quizId}`)
    console.log("Quiz deleted successful",response.data);
  }catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
}
// export const getQuizById = () => async dispatch => {
//   dispatch(fetchQuizByIdRequest());
//   try {
//     const response = await axios.get('https://localhost:7005/api/Quiz/e256e8d7-2dc7-4bc9-a4c4-9eea0d3733b6');
//     dispatch(fetchQuizByIdSuccess(response.data));
//     console.log("quiz", response.data);

//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error.message;
//   }
// };





export { createquiz };