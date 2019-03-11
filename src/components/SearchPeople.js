import React, { Component } from "react";

class SearchPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comrade: "",
      black: true
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  handleComradeSubmit = event => {
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
    const { comrade } = this.state;
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div>
        <p>Comrade Name: {comrade}</p>
        <form onSubmit={this.handleComradeSubmit}>
          <input
            className="searchPeople"
            type="text"
            name="comrade"
            placeholder="Find a Comrade"
            onChange={e => {
              this.props.searchFunc(e);
              this.handleInputChange(e);
            }}
          />
          <button className={btn_class} onClick={this.changeColor.bind(this)}>
            Add Comrade
          </button>
        </form>
      </div>
    );
  }
}

export default SearchPeople;
