import React,{Component} from 'react'
import './toggle.css'
class Toggle extends Component
{
    render()
    {
        return  <div className="toggler">
        <p>{this.props.name}</p>
        <label className="switch">
          <input type="checkbox" onChange={this.props.toggle}/>
          <span className="slider round"></span>
        </label>
      </div>
    }
}

export default Toggle