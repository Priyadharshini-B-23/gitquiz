import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchalltopicfeedbackRequest } from '../../actions/GetTopicFeedbackAction';
import TopicFeedback from './TopicFeedback';
import { useLocation } from 'react-router';
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import Alert from "@mui/material/Alert";
import { deletetopicfeedbackRequest } from '../../actions/DeleteTopicFeedbackAction';

export const GetTopicFeedback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const topicId = searchParams.get('topicId');
  // Access the quizfeedback array from the Redux state
  const { topicfeedback } = useSelector((state) => state.fetchtopicfeedback);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch feedback when the component mounts
    dispatch(fetchalltopicfeedbackRequest(topicId));
  }, [dispatch]);

  const handleDeletetopicfbQuestion = (topicFeedbackId) => {
    dispatch(deletetopicfeedbackRequest(topicFeedbackId));
    <Alert severity="success">Deleted Topic Feedback Question</Alert>;
    window.location.reload();
    debugger;
  };

  return (
    <div>
      <TopicFeedback />
      <div className="question template container">
        <div>
          <h5>
            <b>Review Feedback Questions</b>
          </h5>
          {topicfeedback && topicfeedback.length > 0 ? (
            topicfeedback.map((feedback, index) => (
              <div
                key={index}
                className="card mt-3"
                style={{ backgroundColor: "rgb(237, 231, 231)" }}
              >
                <div className="d-flex justify-content-end">
                  <a
                    // onClick={() => {
                    //   handleOpenEditQuestionModal(
                    //     feedback.quizFeedbackQuestionId
                    //   );
                    // }}
                    className="m-2 me-2"
                  >
                    <AiFillEdit style={{ fontSize: "30", color: "#365486" }} />
                  </a>
                  <a
                    onClick={() => {
                      handleDeletetopicfbQuestion(feedback.topicFeedbackId);
                    }}
                    className="m-2 ms-3"
                  >
                    <FaTrashCan style={{ fontSize: "23", color: "#365486" }} />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Question {feedback.questionNo}:
                  </h5>
                  <input
                    value={feedback.question}
                    className="form-control"
                    readOnly
                  />
                  <div className="form-group">
                    <label>Options:</label>
                    {feedback.options &&
                      feedback.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control mt-2"
                          value={option.optionText}
                          readOnly
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No feedback questions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetTopicFeedback;
