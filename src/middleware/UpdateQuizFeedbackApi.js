import React from "react";

import axios from "axios";
import {
  UPDATE_QUIZFEEDBACK_REQUEST,
  updatequizfeedbackSuccess,
  updatequizfeedbackFailure,
} from "../actions/UpdateQuizFeedbackAction";

// const API_URL =
//   "http://localhost:5199/api/QuizFeedback/UpdateFeedbackQuestion/e5a77e5c-2a0f-45e0-a428-013c69d79220";

export const UpdateQuizFeedbackApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type == UPDATE_QUIZFEEDBACK_REQUEST) {
      try {
        debugger;
        const API_URL = `http://localhost:5199/api/QuizFeedback/UpdateFeedbackQuestion/${action.payload.quizquestionfeedbackid}`;

        console.log("put quiz feedback", action.payload.formData);
        // Assuming 'action.payload' contains the data you want to send
        const response = await axios.put(API_URL, action.payload.formData);
        console.log("feed Put API Response:", response.data); // Log the response data
        dispatch(updatequizfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(updatequizfeedbackFailure(error.message));
      }
    }
    return next(action);
  };
export default UpdateQuizFeedbackApi;
