import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    height: 100,
    width: 100,
    margin: 10
  };

  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          >
            <img src={counter.img} alt="" style={this.styles} />
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
