import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setOutput} from '../../redux/output/output.action'
class Input extends Component
{
    state={

    }
    __handleInput=e=>
    {
        this.props.setOutput(e.target.innerHTML)        
    }
    render()
    {
        return  <div className="calc-input">        
        <button onClick={this.__handleInput}>7</button>
        <button onClick={this.__handleInput}>8</button>
        <button onClick={this.__handleInput}>9</button>
        <button onClick={this.__handleSymbol}>
         /
        </button>
        <button onClick={this.__handleInput}>4</button>
        <button onClick={this.__handleInput}>5</button>
        <button onClick={this.__handleInput}>6</button>
        <button onClick={this.__handleSymbol}>
          X
        </button>
        <button onClick={this.__handleInput}>1</button>
        <button onClick={this.__handleInput}>2</button>
        <button onClick={this.__handleInput}>3</button>
        <button onClick={this.__handleSymbol}>
          -
        </button>
        <button onClick={this.__handleInput}>C</button>
        <button onClick={this.__handleInput}>0</button>
        <button onClick={this.__handleEquals}>
          =
        </button>
        <button onClick={this.__handleSymbol}>
          +
        </button>
      </div>
    }
}
const mapDispatchToProps = dispatch=>({
setOutput: digit=>dispatch(setOutput(digit))
}) 
export default connect(null,mapDispatchToProps)(Input)