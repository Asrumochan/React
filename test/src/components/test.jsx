import React, { Component } from 'react'

export class test extends Component {
    users=[{
        "id": 1,
        "name": "Nightmare Alley",
        "price": 141,
        "quantity": 5
      }, {
        "id": 2,
        "name": "Invisible Woman, The",
        "price": 146,
        "quantity": 6
      }, {
        "id": 3,
        "name": "Shade",
        "price": 352,
        "quantity": 2
      }, {
        "id": 4,
        "name": "Fanny",
        "price": 390,
        "quantity": 7
      }, {
        "id": 5,
        "name": "How I Killed My Father (a.k.a. My Father and I) (Comment j'ai tué mon Père)",
        "price": 279,
        "quantity": 4
      }, {
        "id": 6,
        "name": "Napoleon Dynamite",
        "price": 386,
        "quantity": 1
      }, {
        "id": 7,
        "name": "Croods, The",
        "price": 125,
        "quantity": 5
      }, {
        "id": 8,
        "name": "My Bodyguard",
        "price": 184,
        "quantity": 3
      }, {
        "id": 9,
        "name": "Heart Is a Lonely Hunter, The",
        "price": 405,
        "quantity": 5
      }, {
        "id": 10,
        "name": "Kid Millions",
        "price": 373,
        "quantity": 10
      }]
      state={
        qty:1
      }
      updateHandler=(val)=>{
        if(this.state.qty == 0 && val === -1){
            alert("Product Quantity cannot be less than 0")
          }
          else{
            this.setState({product:{...this.state,qty:this.state.qty+val}})
          }
      }
  render() {
    return (
      <div>
        <h1>Table Rendering</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>     
            </thead>
            <tbody>
                {
                    this.users.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.price}</td>
                            <td><button onClick={this.updateHandler.bind(this,-1)}>-</button>{" "+this.state.qty+" "} <button onClick={this.updateHandler.bind(this,1)}>+</button> </td>
                            <td>{this.state.qty*emp.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default test
