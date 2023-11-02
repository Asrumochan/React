import React from 'react';



class ComponentA extends React.Component {
  state = {
    str : "Hello World",
    num: 2,
    bool: true,
    obj: {name:'A', city:'NY'},
    arr: [1,2,3]
  }

  changeStates = () => {
    const r = Math.floor(Math.random() * 100);
    this.setState({str: "Hello " + r, num: r, bool: !this.state.bool, obj: {...this.state.obj,name:'B'}, arr: [...this.state.arr,4]})
  }




  render() {
    return (
      <>
      <h1>State Example in Class Component</h1>
      <p>{this.state.str}</p>
      <p>This is num: {this.state.num}</p>
      <p>{this.state.bool ? 'True' : 'False' }</p>
      <p>this is arr {this.state.arr[0]}, {this.state.arr[1]}, {this.state.arr[2]}, {this.state.arr[3]}</p>

      <p>This is {this.state.obj.name} and from {this.state.obj.city}</p>
     <button onClick={this.changeStates}>Change String</button>
     </>

    )
  }
}

export default ComponentA;