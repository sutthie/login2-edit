import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Stock extends Component {
  render() {
    return (
      <div>
        <div>
          จำนวน : {this.props.count} <br />
          ราคา : {this.props.amount}
        </div>
      </div>
    );
  }
}
