import React, { Component } from 'react'
export default class Scimode extends Component
{
    render()
    {
        return   <div className="calc-mode">
        <button className="btn">
          <sup>+</sup>/<sub>-</sub>
        </button>
        <button className="btn">
          sqrt(x)
        </button>
        <button className="btn">
          <b>x</b>
          <sup>2</sup>
        </button>
      </div>
    }
}