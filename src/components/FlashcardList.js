import React, { Component } from "react";
import Flashcard from "./Flashcard";

export default class FlashcardList extends Component {
  render() {
    return (
      <div className="FlashcardList">
        {this.props.quizData.map(item => (
          <Flashcard key={this.props.quizData.id} quizData={item} />
        ))}
      </div>
    );
  }
}
