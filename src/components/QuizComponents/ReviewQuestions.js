import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Styles/CreateQuiz.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createquizfeedbackRequest, createquizfeedbackSuccess } from '../../actions/QuizFeedbackAction';
import { useDispatch } from 'react-redux';
import AdminNavbar from './AdminNavbar';
import { useLocation } from 'react-router-dom';

export const ReviewQuestions = ({ GetAllQuestion }) => {
    const location = useLocation();
    const [error, setError] = useState('');
    const [errorfb, setErrorfb] = useState('');
    const [loading, setLoading] = useState('');
    const [showAddfbModal, setShowAddfbModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    // const [handleTypeChange, setHandleTypeChange] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const quizId = searchParams.get('quizId');
    const topicId = searchParams.get('topicId');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            // await GetAllQuestion();
            navigate('/')
                ``
        } catch (error) {
            console.error('Error fetching data:', error)
        }

    };
    const [questions, setQuestions] = useState({
        question: '',
        questionType: '',
        options: ['', '', '', '', '', '', '', ''],
        correctOptions: ['', '', '']
    });
    const [fbQuestion, setFbQuestion] = useState({
        question: '',
        questionType: '',
        options: ['', '', '', '', '', '', '', ''],

    });
    const [selectedfbType, setSelectedfbType] = useState('');

    // const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const GetAllQuestion = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5199/api/QuizQuestions/GetAllQuestions'
                );
                setQuestions(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        GetAllQuestion();
    }, []);

    const handleFeedback = () => {
        try {
            navigate(`/quizfeedback?quizId=${quizId}&topicId=${topicId}`);
        } catch (error) {
            console.error('Error navigating:', error);
        }
    };

    const handleSaveQuestion = () => {
        let tempfbErrors = { question: '', questionType: '', optionText: '' };

        if (!fbQuestion.question) {
            tempfbErrors.question = 'Question is required';
        }
        if (!fbQuestion.questionType) {
            tempfbErrors.questionType = 'Question type is required';
        }
        if (fbQuestion.options.length === 0 && fbQuestion.questionType == "MCQ") {
            tempfbErrors.optionText = 'At least one option is required';
        }

        setErrorfb(tempfbErrors);

        if (tempfbErrors.question || tempfbErrors.questionType || tempfbErrors.optionText) {
            return;
        }

        const requestBody = {
            quizId: "22a43258-f99b-4b7b-98d9-40d5a3e09bc3",
            question: fbQuestion.question,
            questionType: fbQuestion.questionType,
            options: fbQuestion.options.map((optionText, index) => ({
                optionText: optionText
                // isCorrect: fbQuestion.correctOptions.includes(option) // Check if option is in correctOptions array
            }))
        };
        console.log(requestBody)
        dispatch(createquizfeedbackRequest(requestBody));
        handleCloseAddfbQuestionModal();
    };

    const handleOpenAddfbQuestionModal = () => {
        setShowAddfbModal(true);
    };
    const handleTypeChange = () => {
        setShowAddModal(true);
    };

    const handleOpenModal = () => {
        setShowAddModal(true);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
    };
    const handleCloseAddfbQuestionModal = () => {
        setShowAddfbModal(false);
    };
    const handleChange = (index, field, value) => {
        const updatedoptions = [...fbQuestion.options];
        updatedoptions[index] = value;
        setFbQuestion({ ...fbQuestion, options: updatedoptions });

        // if (field === 'correctOptions') {
        //     setFbQuestion(prevState => ({
        //         ...prevState,
        //         correctOptions: [...prevState.correctOptions.slice(0, index), value, ...prevState.correctOptions.slice(index + 1)]
        //     }));
        // } else {
        setFbQuestion(prevState => ({
            ...prevState,
            [field]: index === -1 ? value : [...prevState[field].slice(0, index), value, ...prevState[field].slice(index + 1)]
        }));
        // }
    };

    const handlefbQuestionTypeChange = (e) => {
        const value = e.target.value;
        setSelectedfbType(value);
        setFbQuestion(prevState => ({
            ...prevState,
            questionType: value,
            options: [],
        }));
    };


    return (
        <div>
            <AdminNavbar />
            <div className='question template container' style={{ marginTop: "-47%" }}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {questions && questions.length > 0 && (
                    <div>
                        <h5 style={{ marginTop: "5%" }}>Review Questions</h5>
                        {questions.map((question, index) => (
                            <div key={index} className='card mt-3' style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                                <div className='d-flex justify-content-end'>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Question {question.questionNo}:</h5>

                                    <input value={question.question} className='form-control' readOnly />
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

                        ))}
                        <button onClick={handleSubmit} className="btn btn-light mt-3 mb-5 float-right" style={{ backgroundColor: "#365486", color: "white" }}>Go to Edit Page</button>

                        <button onClick={handleTypeChange} className="btn btn-light mt-3 mb-5 float-right" style={{ backgroundColor: "#365486", color: "white", marginLeft: "74%" }}>Review & Publish</button>


                    </div>
                )}

                <div>
                    <Modal show={showAddfbModal} onHide={handleCloseAddfbQuestionModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Feedback Questions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                            <div className="form-group">
                                <label>Question Type:</label>
                                <select className='form-control' value={selectedfbType} onChange={handlefbQuestionTypeChange}>
                                    <option value="">Select Question Type</option>
                                    <option value="MCQ">MCQ</option>
                                    <option value="Descriptive">Descriptive</option>
                                </select>
                                {errorfb.questionType && <div style={{ color: "red" }}>{errorfb.questionType}</div>}
                            </div>

                            {selectedfbType === 'MCQ' && (
                                <>
                                    <div className="form-group">
                                        <label>Question:</label>
                                        <input className='form-control' type="text" value={fbQuestion.question} onChange={(e) => handleChange(-1, 'question', e.target.value)} />
                                        {errorfb.question && <div style={{ color: "red" }}>{errorfb.question}</div>}
                                    </div>
                                    {[...Array(4)].map((_, index) => (
                                        <div className="form-group" key={index}>
                                            <label>Option {index + 1}:</label>
                                            <input className='form-control' type="text" value={fbQuestion.options[index] || ''} onChange={(e) => handleChange(index, 'options', e.target.value)} />
                                            {errorfb.options && <div style={{ color: "red" }}>{errorfb.options}</div>}
                                        </div>
                                    ))}
                                </>
                            )}
                            {selectedfbType === 'Descriptive' && (
                                <>
                                    <div className="form-group">
                                        <label>Question:</label>
                                        <input className='form-control' type="text" value={fbQuestion.question} onChange={(e) => handleChange(-1, 'question', e.target.value)} />
                                        {errorfb.question && <div style={{ color: "red" }}>{errorfb.question}</div>}
                                    </div>
                                </>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                            <Button variant="secondary" onClick={handleCloseAddfbQuestionModal}>Close</Button>
                            <Button variant="primary" onClick={() => { handleSaveQuestion() }}>Save</Button>

                        </Modal.Footer>
                    </Modal>

                    <Modal show={showAddModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton style={{ backgroundColor: "#23275c" }}>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                            <div onChange={handleTypeChange}><h6>Quiz Questions Published successfully</h6></div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(237, 231, 231)" }}>
                            <Button onClick={handleFeedback} className="btn btn-light mt-3 mb-5 " style={{ backgroundColor: "#365486", color: "white", marginLeft: "-1%" }}>Add Feedback</Button>
                            <Button className="btn btn-light mt-3 mb-5" style={{ backgroundColor: "#365486", color: "white", marginLeft: "60%" }} onClick={handleCloseModal}>Ok</Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>

    );
};


export default ReviewQuestions