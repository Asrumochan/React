import React, { Component } from 'react'

 class classComp extends Component {
  state={
    name:"John"
  }
  change=()=>{
    this.state.name="Asrumochan Parida"
    console.log(this.state.name)
    this.forceUpdate();
  }
  render() {
    return (
      <div>
          <pre>{JSON.stringify(this.state) }</pre>
          <h2>{"Name: "+ this.state.name}</h2>
          <button onClick={this.change}> Change</button>
      </div>
    )
  }
}

export default classComp
