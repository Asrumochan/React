import React, { Component } from 'react'

class product extends Component {
  state={
    product:{
    id:101,
    name: "Lenovo",
    price: "34000",
    image:"https://www.lenovo.com/medias/lenovo-laptops-ideapad-3i-gen-7-14-intel-hero.png?context=bWFzdGVyfHJvb3R8NDYyOTU3fGltYWdlL3BuZ3xoNWYvaGE3LzE0NjgzNTMyNzU0OTc0LnBuZ3w1OGQ0OTIwN2YwNjQ0MjMxZjAzYmNiNDBiOWY2ZWVlZGZiNGJlMTYwZTk5NzI5ZTM4M2M0YzI2N2I1OTI0NTQ5",
    qty:1
  }
}
updateHandler=(val) =>{
  if(this.state.product.qty <= 0 && val == -1){
    console.log("sas");
    alert("Product Quantity cannot be less than 0")
  }
  else{
    this.setState({product:{...this.state.product,qty:this.state.product.qty+val}})
  }
}
  render() {
   const {product:{id,name,price,image,qty}}=this.state 
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <h2>Product Component</h2>
        <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody id='user' className='table'>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <img src={image} alt="" style={{height:'100px'}}/>
                <td>{price}</td>
                <td><button onClick={this.updateHandler.bind(this,-1)}>-</button>
                  {" "+qty+" "}
                  <button onClick={this.updateHandler.bind(this,1)}>+</button>
                  </td>
                <td>{price*qty}</td>
              </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default product
