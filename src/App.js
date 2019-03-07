import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      people: []
    };
  }
  render() {
    return (
      <div className="App">
        <Header branding="Star Wars App" />
      </div>
    );
  }
}

export default App;
