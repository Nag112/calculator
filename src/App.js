import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    output: "1234"
  };
  render() {
    return (
      <div className="calc-container">
        <code>Nagacharan</code>
        <div className="calc-body">
        <div className="theme">
       <p>nightmode</p>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
       </div>
          <div className="calc-output">{this.state.output}</div>
      
          <div className="calc-input">     
          <button className="btn">Si-mod</button>
          <button className="btn">Sign</button>     
          <button className="btn">Sqrt</button>
          <button className="btn">Square</button>          
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>X</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>C</button>
            <button>0</button>
            <button>=</button>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
