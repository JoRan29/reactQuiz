import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/questionBox";

class Quiz extends Component {
  state = {
    questionBank: [],
  };
  getQuestions = () => {
    quizService().then((q) => {
      this.setState({
        questionBank: q,
      });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionID }) => (
              <QuestionBox
                key={questionID}
                question={question}
                options={answers}
              />
            )
          )}
      </div>
    );
  }
}

export default Quiz;

ReactDOM.render(<Quiz />, document.getElementById("root"));
