import React, { Component } from "react";
import "./Start.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Form/FormLogin";

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default Start;
