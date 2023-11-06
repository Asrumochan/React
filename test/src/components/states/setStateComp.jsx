import React, { Component } from 'react'
import 
class setStateComp extends Component {
    state={
        name:"Hello",
        fname:"Asrumochan",
        lname:"Parida"
    }
    change=()=>{
        this.setState({name:"Asrumochan"})
    }
    changeReset=()=>{
      this.setState({name:"Hello"})
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
            <h1>setState Component</h1>
            <h2>{"Name: "+this.state.name}</h2>
            <button onClick={this.change}>change</button>
            <button onClick={this.changeReset}>reset</button>
      </div>
    )
  }
}

export default setStateComp
