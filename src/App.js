import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import People from "./components/People";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      input: ""
    };
    this.funfunFunction = this.funfunFunction.bind(this);
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.setState({
        people: res.data.results
      });
    });
  }

  funfunFunction(val) {
    this.setState({
      input: val
    });
  }

  render() {
    let allPeople = this.state.people
      .filter(e => e.name.includes(this.state.input))
      .map((element, index) => {
        return (
          <People
            key={index}
            name={element.name}
            height={parseInt(element.height, 10)}
            mass={parseInt(element.mass, 10)}
          />
        );
      });

    return (
      <div className="App">
        <Header />
        <input
          placeholder="Search for some people"
          onChange={e => this.funfunFunction(e.target.value)}
        />
        {allPeople}
      </div>
    );
  }
}

export default App;
