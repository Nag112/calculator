import React, { Component, Fragment } from "react";
import Toggle from "./Components/toggle";
import Scimode from "./Components/scifi_mode";
import "./App.css";

class App extends Component {
  state = {
    output: "",
    scimode: false
  };

  _toggleSciMode = e => {
    this.setState({ scimode: !this.state.scimode }, () =>
      console.log(this.state.scimode)
    );
  };
  __handleInput = e => {
    if (e.target.innerHTML === "C") {
      this.setState({ output: "" });
    } else {
      let temp = this.state.output + e.target.innerHTML;
      this.setState({ output: temp }, () => console.log(this.state));
    }
  };
  _handlekey = e => {
    console.log(e.key);
  };
  render() {
    return (
      <div className="calc-container">
        <code>Nagacharan</code>
        <div className="calc-body" onKeyPress={this._handlekey}>
          <div className="toggle">
            <Toggle name="Scientific mode" toggle={this._toggleSciMode} />
            <Toggle name="night mode" />
          </div>
          <div className="calc-output">
            {this.state.output === "" ? 0 : this.state.output}
          </div>
          <div className="calc-mode">
            {this.state.scimode ? <Scimode /> : <div className="blank"></div>}
          </div>
          <div className="calc-input">
            <button onClick={this.__handleInput}>7</button>
            <button onClick={this.__handleInput}>8</button>
            <button onClick={this.__handleInput}>9</button>
            <button onClick={this.__handleInput}>
              <i className="fas fa-divide"></i>
            </button>
            <button onClick={this.__handleInput}>4</button>
            <button onClick={this.__handleInput}>5</button>
            <button onClick={this.__handleInput}>6</button>
            <button onClick={this.__handleInput}>
              <i className="fas fa-times"></i>
            </button>
            <button onClick={this.__handleInput}>1</button>
            <button onClick={this.__handleInput}>2</button>
            <button onClick={this.__handleInput}>3</button>
            <button onClick={this.__handleInput}>
              <i className="fas fa-minus"></i>
            </button>
            <button onClick={this.__handleInput}>C</button>
            <button onClick={this.__handleInput}>0</button>
            <button onClick={this.__handleInput}>
              <i className="fas fa-equals"></i>
            </button>
            <button onClick={this.__handleInput}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
