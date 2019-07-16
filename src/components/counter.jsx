import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //badge- is first part of both below options
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    let id = this.props.counter.id;
    return (
      <div>
        {this.props.children}
        <h4 style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </h4>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete({ id })}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div />
      </div>
    );
  }
}

export default Counter;
