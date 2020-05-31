import React from "react";
import "./App.css";
import FlashcardList from "./components/FlashcardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quizData: SampleData };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(data => data.results)
      .then(results => this.setState({ quizData: results }));
  }

  render() {
    return (
      <div className="App">
        <FlashcardList quizData={this.state.quizData} />
      </div>
    );
  }
}

const SampleData = [
  {
    id: 1,
    question: "What is 2 + 3?",
    answer: 5,
  },
  {
    id: 2,
    question: "Question 2",
    answer: "answer 2",
  },
];

export default App;
