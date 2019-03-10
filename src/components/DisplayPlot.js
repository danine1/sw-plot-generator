import React, { Component } from "react";

class DisplayPlot extends Component {
  render() {
    return (
      <div className="plotDetails">
        <p>Mission Name: {this.props.title}</p>
        <p>Mission Objective: {this.props.description}</p>
        <p>Comrade: {this.props.people}</p>
        <p>Target World: {this.props.planets}</p>
      </div>
    );
  }
}

export default DisplayPlot;
