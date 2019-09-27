import React, { Component,Fragment } from 'react'
export default class Scimode extends Component
{
    render()
    {
        return  <Fragment>
        <button className="btn">
          <sup>+</sup>/<sub>-</sub>
        </button>
        <button className="btn">
          <i className="fas fa-square-root-alt"></i>
        </button>
        <button className="btn">
          <b>x</b>
          <sup>2</sup>
        </button>
      </Fragment>
    }
}