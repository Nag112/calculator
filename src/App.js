import React, { Component } from "react";
import Toggle from "./Components/toggle";
import Scimode from "./Components/scifi_mode";
import Input from "./Components/input";
import Display from "./Components/display";
import "./App.css";

class App extends Component {
  state = {
    output: "",
    scimode: false,
    night: true,
    stack: []
  };

  _toggleSciMode = e => {
    this.setState({ scimode: !this.state.scimode }, () =>
      console.log(this.state.scimode)
    );
  };

  _toggleNightmode = e => {
    this.setState({ night: !this.state.night }, () =>
      console.log(this.state.night)
    );
  };

  __handleInput = e => {
    if (e.target.innerHTML === "C") {
      this.setState({ output: "", stack: [] });
    } else {
      let temp = this.state.output + e.target.innerHTML;
      this.setState({ output: temp }, () => console.log(this.state));
    }
  };

  __handleSymbol = e => {
    if (this.state.output !== "") {
      this.setState({ stack: [] });
    }
  };

  __handleEquals = e => {
    let temp;
    this.state.output ? (temp = this.state.output) : (temp = "0");
    this.setState({ output: temp });
  };
  render() {
    var bgColor = "";
    this.state.night === true ? (bgColor = "black") : (bgColor = "white");
    return (
      <div className="calc-container" style={{ backgroundColor: bgColor }}>
        <code>Simple Calcy</code>
        <div className="calc-body">
          <div className="toggle">
            <Toggle name="Scientific mode" toggle={this._toggleSciMode} />
            <Toggle name="Night mode" toggle={this._toggleNightmode} />
          </div>
          <Display />
          {
            this.state.scimode ? 
            <Scimode /> 
            : <div className="blank"></div>
          }
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
