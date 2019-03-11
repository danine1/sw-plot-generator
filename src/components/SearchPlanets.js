import React, { Component } from "react";

class SearchPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: "",
      black: true
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  handlePlanetSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { planet } = this.state;
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div>
        <p>World: {planet}</p>
        <form onSubmit={this.handlePlanetSubmit}>
          <input
            className="searchPlanet"
            type="text"
            name="planet"
            placeholder="Where in the Galaxy?"
            onChange={e => {
              this.props.searchFunc(e);
              this.handleInputChange(e);
            }}
          />
          <button className={btn_class} onClick={this.changeColor.bind(this)}>
            Add World
          </button>
        </form>
      </div>
    );
  }
}

export default SearchPeople;
