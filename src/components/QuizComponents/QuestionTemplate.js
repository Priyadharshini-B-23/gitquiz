import React from 'react';

export const QuestionTemplate = ({ question }) => {
  if (!question || !question.options || !question.correctOptions) {
    return null; 
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Question {question.questionNo}:</h5>

        <input value={question.question} className='form-control' readOnly/>
        <div className="form-group">
          <label>Options:</label>
          {question.options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="form-control mt-2"
              value={option.option} 
              readOnly
            />
          ))}
        </div>
        <div className="form-group">
          <label>Correct Answers:</label>
          {question.options.filter(option => option.isCorrect).map((correctOption, index) => (
            <input
              key={index}
              type="text"
              className="form-control mt-2"
              value={correctOption.option} 
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

