import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";

import SearchPeople from "./components/SearchPeople";
import ListPeople from "./components/ListPeople";
import StoryInfo from "./components/StoryInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      people: [],
      store: []
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people")
      .then(json =>
        json.data.results.map(result => ({
          name: `${result.name}`,
          id: result.id
        }))
      )
      .then(newData => this.setState({ people: newData, store: newData }))
      .catch(error => alert(error));
  }

  filterNames(e) {
    this.setState({
      people: this.state.store.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <Header branding="Star Wars App" />
        <div className="jumbotron">Start Your Intergalactic adventure</div>
        <StoryInfo />
        <div className="row">
          <div className="col-md-6">
            <SearchPeople searchFunc={e => this.filterNames(e)} />
            <ListPeople peoplenames={people} />
          </div>
          <div className="col-md-6">
            <SearchPeople searchFunc={e => this.filterNames(e)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
