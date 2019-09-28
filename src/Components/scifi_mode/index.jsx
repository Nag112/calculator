import React, { Component } from 'react'
import {connect} from 'react-redux';
import {flip,square,squareRoot} from '../../redux/output/output.action'
class Scimode extends Component
{
    _handleFlip=e=> this.props.flip()

    _handleRoot=e=>this.props.sqrt()
   
    _handleSquare=e=>this.props.square()

    render()
    {
        let className="btn"
        this.props.mode?(className="btn night"):(className="btn day")
        return   <div className="calc-mode">
        <button className={className} onClick={this._handleFlip}>
          <sup>+</sup>/<sub>-</sub>
        </button>
        <button className={className} onClick={this._handleRoot}>
          sqrt(x)
        </button>
        <button className={className} onClick={this._handleSquare}>
          <b>x</b>
          <sup>2</sup>
        </button>
      </div>
    }
}

const mapDispatchToProps = dispatch=>({
    flip: act=>dispatch(flip(act)),
    square:act=>dispatch(square(act)),    
    sqrt:act=>dispatch(squareRoot(act)),
    }) 
    export default connect(null,mapDispatchToProps)(Scimode)