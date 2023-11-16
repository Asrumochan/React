import React, { Component } from 'react'
import './style.css'
class test extends Component {
    constructor(props){
        super(props)
        this.state={
            currTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount=()=>{
        setInterval(() => {
            this.setState({currTime:new Date().toLocaleTimeString()})
          console.log("hello");
        }, 1000);
    }
  render() {
    return (
      <div>
            <h2>Testing api</h2>
            <div className='container'>
              <h5>Digital Clock</h5>
                <h3 className='clock'>{this.state.currTime}</h3>
            </div>
      </div>
    )
  }
}

export default test
