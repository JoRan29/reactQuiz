import React, { useState } from "react";

let QuestionBox = ({ question, options }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, i) => (
        <button
          onClick={() => {
            setAnswer([text]);
          }}
          key={i}
          className="answerBtn"
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
