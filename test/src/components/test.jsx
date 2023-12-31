import React, { Component } from 'react'

export class test extends Component {
    
      state={
        users:[{
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
      }
      decrHandler=(val)=>{
        // if(this.state.users[val].quantity == 0 && val === -1){
        //     alert("Product Quantity cannot be less than 0")
        //   }
        //   else{
        //     this.setState({...this.state.users[val],quantity:this.state.users[val].quantity+val})
        //   }
        // alert(this.state.users[val].quantity-1)
        // this.setState({users[val]:[...this.state.users[val],quantity:this.state.users[val].quantity-1]})
        alert(this.state.users[val].quantity)
    }
    incrHandler=(val)=>{
        // this.setState({...this.state.users[val],quantity:this.state.users[val].quantity+1})
        alert(this.state.users[val].quantity)
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
                    this.state.users.map((emp,i)=>{
                        return <tr key={i}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.price}</td>
                            <td><button onClick={this.decrHandler.bind(this,i)}>-</button>{" "+emp.quantity+" "} <button onClick={this.incrHandler.bind(this,i)}>+</button> </td>
                            <td>{emp.quantity*emp.price}</td>
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
