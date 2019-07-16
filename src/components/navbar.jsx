import React, { Component } from "react";

class Navbar extends Component {
  stylesIcon = {
    height: 25,
    width: 25
  };

  stylesFont = {
    fontSize: 30,
    fontWeight: "bolder",
    color: "darkGray",
    paddingRight: 20
  };

  stylesNav = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline"
  };

  render() {
    return (
      <nav style={this.stylesNav} className="navbar navbar-light bg-light">
        <p style={this.stylesFont}>ShoppR</p>
        <a className="navbar-brand" href="#">
          <img src="./assets/shopping-cart-svg.svg" style={this.stylesIcon} />
          <div className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </div>
        </a>
      </nav>
    );
  }
}

export default Navbar;
