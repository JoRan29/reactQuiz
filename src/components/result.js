import React from "react";

let Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">You scored {score}/5 correct answers!</div>
    <button onClick={playAgain} className="playBtn">
      Play again!
    </button>
  </div>
);

export default Result;
