import React, { Component } from "react";

class SearchPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: ""
    };
  }

  handlePlanetSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  render() {
    const { planet } = this.state;
    return (
      <div>
        <p>World: {planet}</p>
        <form onSubmit={this.handlePlanetSubmit}>
          <input
            className="searchPlanet"
            type="text"
            name="planet"
            placeholder="Where in the Galaxy?"
            onChange={this.props.searchFunc}
          />
          <button>Add World</button>
        </form>
      </div>
    );
  }
}

export default SearchPeople;
