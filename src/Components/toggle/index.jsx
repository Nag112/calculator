import React,{Component} from 'react'
import './toggle.css'
class Toggle extends Component
{
    render()
    {
        let color="";
        this.props.mode?(color="white"):(color="black")
        return  <div className="toggler">
        <p style={{color:color}}>{this.props.name}</p>
        <label className="switch">
          <input type="checkbox" onChange={this.props.toggle}/>
          <span className="slider round"></span>
        </label>
      </div>
    }
}

export default Toggle