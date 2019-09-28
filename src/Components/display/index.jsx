import React, { Component } from 'react'
import {connect} from 'react-redux'
import './display.css'

class Display extends Component{
    render()
    {
        return  <div className="calc-output">
        {
            this.props.output === "" ? 0 : this.props.output 
        }
      </div>
    }
}
const mapStateToProps=state=>({
    output:state.display.output
})
export default connect(mapStateToProps)(Display);