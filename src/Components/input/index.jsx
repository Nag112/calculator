import React, { Component } from 'react'
import {connect} from 'react-redux';
import './input.css'
import {setOutput,pushOutput,displayResult} from '../../redux/output/output.action'
class Input extends Component
{
   
    __handleInput=e=>this.props.setOutput(e.target.innerHTML)        
    
    __handleSymbol=e=>this.props.pushOutput(e.target.innerHTML)   

    __handleEquals=e=>this.props.displayResult()
    render()
    {   let className="day"
        this.props.mode?(className="day"):(className="night")
        return  <div className="calc-input">        
        <button className={className}onClick={this.__handleInput}>7</button>
        <button className={className}onClick={this.__handleInput}>8</button>
        <button className={className}onClick={this.__handleInput}>9</button>
        <button className={className}onClick={this.__handleSymbol}>
         /
        </button>
        <button className={className}onClick={this.__handleInput}>4</button>
        <button className={className}onClick={this.__handleInput}>5</button>
        <button className={className}onClick={this.__handleInput}>6</button>
        <button className={className}onClick={this.__handleSymbol}>
          X
        </button>
        <button className={className}onClick={this.__handleInput}>1</button>
        <button className={className}onClick={this.__handleInput}>2</button>
        <button className={className}onClick={this.__handleInput}>3</button>
        <button className={className}onClick={this.__handleSymbol}>
          -
        </button>
        <button className={className}onClick={this.__handleInput}>C</button>
        <button className={className}onClick={this.__handleInput}>0</button>
        <button className={className}onClick={this.__handleEquals}>
          =
        </button>
        <button className={className}onClick={this.__handleSymbol}>
          +
        </button>
      </div>
    }
}
const mapDispatchToProps = dispatch=>({
setOutput: digit=>dispatch(setOutput(digit)),
pushOutput: sym=>dispatch(pushOutput(sym)),
displayResult:() => dispatch(displayResult())
}) 
export default connect(null,mapDispatchToProps)(Input)