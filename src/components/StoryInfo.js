import React, { Component } from "react";

class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }
  handleSubmit = event => {
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
    const { title, description } = this.state;
    return (
      <div>
        <p>Mission Name: {title}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Adventure Title"
              name="title"
              onChange={this.handleInputChange}
            />
          </p>
          <p>Mission Objectives: {description}</p>
          <p>
            <input
              type="text"
              placeholder="Adventure Description"
              name="description"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Add Mission Details</button>
          </p>
        </form>
      </div>
    );
  }
}

export default StoryInfo;
