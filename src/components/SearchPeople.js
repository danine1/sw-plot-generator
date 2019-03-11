import React, { Component } from "react";

class SearchPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comrade: ""
    };
  }

  handleComradeSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  render() {
    const { comrade } = this.state;
    return (
      <div>
        <p>Comrade Name: {comrade}</p>
        <form onSubmit={this.handleComradeSubmit}>
          <input
            className="searchPeople"
            type="text"
            name="comrade"
            placeholder="Find a Comrade"
            onChange={this.props.searchFunc}
          />
          <button>Add Comrade</button>
        </form>
      </div>
    );
  }
}

export default SearchPeople;
