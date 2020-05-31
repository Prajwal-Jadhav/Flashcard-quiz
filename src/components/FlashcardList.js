import React, { Component } from "react";
import Flashcard from "./Flashcard";

export default class FlashcardList extends Component {
  render() {
    return (
      <div className="FlashcardList">
        {this.props.quizData.map((item, index) => (
          <Flashcard key={`${index} ${Date.now()}`} quizData={item} />
        ))}
      </div>
    );
  }
}
