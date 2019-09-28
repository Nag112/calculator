import React, { Component } from 'react'
export default class Scimode extends Component
{
    render()
    {
        let className="btn"
        this.props.mode?(className="btn day"):(className="btn night")
        return   <div className="calc-mode">
        <button className={className}>
          <sup>+</sup>/<sub>-</sub>
        </button>
        <button className={className}>
          sqrt(x)
        </button>
        <button className={className}>
          <b>x</b>
          <sup>2</sup>
        </button>
      </div>
    }
}