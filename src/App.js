import React, { Component } from "react";
import Toggle from "./Components/toggle";
import Scimode from "./Components/scifi_mode";
import Input from "./Components/input";
import Display from "./Components/display";
import "./App.css";

class App extends Component {
  state = {
    scimode: false,
    night: true
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

  render() {
    var bgColor = "";
    var color=""
    if(this.state.night)
    {
      bgColor = "black";
      color="white"
    }
    else 
    {
      bgColor = "white";
      color="black";
    }
    return (
      <div className="calc-container" style={{ backgroundColor: bgColor}}>
        <code style={{color:color}}>Simple Calcy</code>
        <div className="calc-body" style={{borderColor:color }}>
          <div className="toggle">
            <Toggle mode={this.state.night} name="Scientific mode" toggle={this._toggleSciMode} />
            <Toggle mode={this.state.night} name="Night mode" toggle={this._toggleNightmode} />
          </div>
          <Display />
          {
            this.state.scimode ? 
            <Scimode mode={this.state.night}/> 
            : <div className="blank"></div>
          }
          <Input mode={this.state.night}/>
        </div>
      </div>
    );
  }
}

export default App;
