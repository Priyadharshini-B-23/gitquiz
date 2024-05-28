import React from "react";

import axios from "axios";
import {
  DELETE_TOPICFEEDBACK_REQUEST,
  deletetopicfeedbackSuccess,
  deletetopicfeedbackFailure,
} from "../actions/DeleteTopicFeedbackAction";

export const DeleteTopicFeedbackApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type == DELETE_TOPICFEEDBACK_REQUEST) {
      try {
        const API_URL = `http://localhost:5199/api/TopicFeedback/${action.payload}`;

        console.log("delete topic feedback", action.payload);
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.delete(API_URL);
        console.log("Delete topic feedback API Response:", response.data); // Log the response data
        dispatch(deletetopicfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(deletetopicfeedbackFailure(error.message));
      }
    }
    return next(action);
  };
export default DeleteTopicFeedbackApi;
