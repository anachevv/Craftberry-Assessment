import React, { useState } from 'react';

export default function Question() {
  const questions = [
    { question: "What's your hair type or texture?", options: ["Straight", "Curly", "Wavy", "Fine"] },
    { question: "How often do you wash your hair?", options: ["Daily", "Every other day", "Twice a week", "Once a week", "Once every two weeks"] },
    { question: "What benefit do you look for in your hair products?", options: ["Anti-breakage", "Hydration", "Soothing dry scalp", "Repairs the appearance of damaged hair", "Volume", "Curl and coil enhancing"] },
    { question: "Is there anything troubling you about your hair?", options: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"] },
    { question: "What is your natural hair color(s) today?", options: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"] }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
        window.location.href = '/results';
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <div className="q-container">
        <div className="q-subcontainer">
          <div className="q-header">
            <h1 className="raleway-header">{questions[currentQuestion].question}</h1>
          </div>
          <div className="options">
            <form action="#" method="post">
              {questions[currentQuestion].options.map((option, index) => (
                <div className="sub" key={index}>
                  <input type="radio" id={option} name="answer" value={option} checked={answers[currentQuestion] === option} onChange={handleSelect} />
                  <label className="poppins-regular" htmlFor={option}>{`${String.fromCharCode(97 + index)}. ${option}`}</label>
                </div>
              ))}
              <div className="buttons">
                <a href="/" className="back-button" onClick={handleBack}>Back</a>
                <button type="submit" className="next-button" onClick={handleNext}>
                  {currentQuestion < questions.length - 1 ? 'Next question →' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="progress-circle">
          <svg viewBox="0 0 120 120">
            <circle className="bg" cx="60" cy="60" r="50"></circle>
            <circle className="progress" cx="60" cy="60" r="50" style={{ strokeDasharray: `${(currentQuestion + 1) / questions.length * 100} 100` }}></circle>
          </svg>
          <div className="poppins-regular" id="progress-text">{currentQuestion + 1}/5</div>
        </div>
      </div>
    </>
  );
}