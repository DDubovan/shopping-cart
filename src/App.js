import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, img: "./assets/striped-sweater.jpg" },
      { id: 2, value: 0, img: "./assets/white-original-tshirt.jpg" },
      { id: 3, value: 0, img: "./assets/black-tshirt-eat-right.jpg" },
      { id: 4, value: 0, img: "./assets/tshirt-shorts-sneakers.jpg" },
      { id: 5, value: 0, img: "./assets/shoes-shirt-men.jpg" }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.splice(this.state.counters.id, 1);
    this.setState({
      counter: counters
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
