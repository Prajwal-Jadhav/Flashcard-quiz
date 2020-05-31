import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.frontRef = React.createRef();
    this.backRef = React.createRef();
    this.state = { isFlipped: false, height: "0px" };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({ isFlipped: !this.state.isFlipped });
  };

  componentDidMount() {
    console.log(this.frontRef.current);
    this.setState({
      height: Math.max(
        this.frontRef.current.clientHeight,
        this.backRef.current.clientHeight
      ),
    });
  }

  setHeight = () => {
    console.log(this.frontRef.current.clientHeight);
  };

  decode = str => {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  };

  render() {
    const { question, correct_answer, incorrect_answers } = this.props.quizData;
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <div
          id="frontref"
          ref={this.frontRef}
          style={{ height: `${this.state.height}px` }}
        >
          <div className="front Flashcard" onClick={this.handleClick}>
            <p className="question">{this.decode(question)}</p>
            <div>
              {[correct_answer, ...incorrect_answers]
                .sort(() => 0.5 - Math.random())
                .map((option, index) => (
                  <p className="option" key={`${index} ${Date.now()}`}>
                    {this.decode(option)}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div
          id="backref"
          ref={this.backRef}
          style={{ height: `${this.state.height}px` }}
        >
          <div className="back Flashcard" onClick={this.handleClick}>
            <p className="answer">{this.decode(correct_answer)}</p>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}
