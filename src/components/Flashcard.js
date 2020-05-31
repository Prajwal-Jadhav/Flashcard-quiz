import React, { Component } from "react";

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  onFlashcardClick = () => {
    this.setState({ flip: !this.state.flip });
  };

  decode = str => {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  };

  displayFlashcard = (q, ans, options) => {
    if (!options) return;

    if (this.state.flip) {
      return (
        <div className="back">
          <p className="answer">{this.decode(ans)}</p>
        </div>
      );
    } else {
      return (
        <div className="front">
          <p className="question">{this.decode(q)}</p>
          <div>
            {[ans, ...options]
              .sort(() => 0.5 - Math.random())
              .map(option => (
                <p className="option">{this.decode(option)}</p>
              ))}
          </div>
        </div>
      );
    }
  };

  render() {
    const { question, correct_answer, incorrect_answers } = this.props.quizData;
    return (
      <div className="Flashcard" onClick={this.onFlashcardClick}>
        {this.displayFlashcard(question, correct_answer, incorrect_answers)}
      </div>
    );
  }
}
