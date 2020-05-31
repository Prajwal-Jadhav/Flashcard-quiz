import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: "General Knowledge", inputValue: 10 };
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.selectedValue, this.state.inputValue);
  };

  render() {
    const categories = this.props.categories;

    return (
      <div className="Searchbar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="selectmenu">
            <label htmlFor="select__category">Select category</label>
            <select
              id="select__category"
              value={this.state.selectedValue}
              onChange={e => this.setState({ selectedValue: e.target.value })}
            >
              {categories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="inputField">
            <label htmlFor="numInput">Select amount</label>
            <input
              id="numInput"
              type="number"
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
            />

            <button type="submit" className="btn__submit">
              Generate
            </button>
          </div>
        </form>
      </div>
    );
  }
}
