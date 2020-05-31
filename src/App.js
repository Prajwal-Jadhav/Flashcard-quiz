import React from "react";
import "./App.css";
import FlashcardList from "./components/FlashcardList";
import Searchbar from "./components/Searchbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quizData: [], categories: [] };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(data => data.results)
      .then(results => this.setState({ quizData: results }));

    fetch("https://opentdb.com/api_category.php")
      .then(response => response.json())
      .then(data => data.trivia_categories)
      .then(categories => this.setState({ categories: categories }));
  }

  onSubmit = (category, amount) => {
    let categoryIndex = this.state.categories.find(
      item => item.name === category
    ).id;

    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${categoryIndex}`
    )
      .then(response => response.json())
      .then(data => data.results)
      .then(results => this.setState({ quizData: results }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.onSubmit}
          categories={this.state.categories}
        />
        <FlashcardList quizData={this.state.quizData} />
        <p className="footer">made with ❤ by Prajwal Jadhav</p>
      </div>
    );
  }
}

export default App;
