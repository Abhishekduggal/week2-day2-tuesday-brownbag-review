import React, { Component } from "react";

class People extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      mass: 0
    };
    this.decreaseHeight = this.decreaseHeight.bind(this);
    this.increaseHeight = this.increaseHeight.bind(this);
    this.decreaseMass = this.decreaseMass.bind(this);
    this.increaseMass = this.increaseMass.bind(this);
  }

  decreaseHeight() {
    this.setState({
      height: this.state.height - 1
    });
  }

  increaseHeight() {
    this.setState({
      height: this.state.height + 1
    });
  }

  decreaseMass() {
    this.setState({
      mass: this.state.mass - 1
    });
  }

  increaseMass() {
    this.setState({
      mass: this.state.mass + 1
    });
  }

  render() {
    let { height, mass } = this.state;
    let { height: propsHeight, mass: propsMass, name } = this.props;

    return (
      <div style={{ margin: "auto", width: "200px" }}>
        <h2>{name}</h2>
        <div style={{ display: "flex", margin: "auto" }}>
          <button onClick={this.decreaseHeight}>-</button>
          <h4>height: {propsHeight + height}</h4>
          <button onClick={this.increaseHeight}>+</button>
        </div>
        <div style={{ display: "flex", margin: "auto" }}>
          <button onClick={this.decreaseMass}>-</button>
          <h4>mass: {propsMass + mass}</h4>
          <button onClick={this.increaseMass}>+</button>
        </div>
      </div>
    );
  }
}

export default People;
