import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";

import SearchPeople from "./components/SearchPeople";
import SearchPlanets from "./components/SearchPlanets";
import ListPeople from "./components/ListPeople";
import ListPlanets from "./components/ListPlanets";
import StoryInfo from "./components/StoryInfo";
import DisplayPlot from "./components/DisplayPlot";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      people: [],
      storepeople: [],
      storeplanets: []
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
      .then(newData =>
        this.setState({ people: newData, storepeople: newData })
      );
    return axios
      .get("https://swapi.co/api/planets")
      .then(json =>
        json.data.results.map(result => ({
          name: `${result.name}`,
          id: result.name.id
        }))
      )
      .then(newData2 =>
        this.setState({ planets: newData2, storeplanets: newData2 })
      )
      .catch(error => alert(error));
  }

  filterNames(e) {
    this.setState({
      people: this.state.storepeople.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  }

  filterPlanets(e) {
    this.setState({
      planets: this.state.storeplanets.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  }

  render() {
    const { people, planets } = this.state;
    console.log("People", people);
    console.log("Planets", planets);
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
            <SearchPlanets searchFunc={e => this.filterPlanets(e)} />
            <ListPlanets planetnames={planets} />
          </div>
          <div className="col-md-12">
            <DisplayPlot />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
