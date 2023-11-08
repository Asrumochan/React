import React, { Component } from 'react'
class productSingleHandler extends Component {
  state={
    product:{
    id:101,
    name: "Lenovo",
    price: "34000",
    image:"https://www.lenovo.com/medias/lenovo-laptops-ideapad-3i-gen-7-14-intel-hero.png?context=bWFzdGVyfHJvb3R8NDYyOTU3fGltYWdlL3BuZ3xoNWYvaGE3LzE0NjgzNTMyNzU0OTc0LnBuZ3w1OGQ0OTIwN2YwNjQ0MjMxZjAzYmNiNDBiOWY2ZWVlZGZiNGJlMTYwZTk5NzI5ZTM4M2M0YzI2N2I1OTI0NTQ5",
    qty:1
  },
  product1:{
    id1:102,
    name1: "Asus",
    price1: "35000",
    image1:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwUGAQIDBAj/xABJEAAABQICAwYRCQkBAAAAAAAAAQIDBAURBiESMUEXUWGTsdEHExQVIzZTVHFzdYGRlKGz0iIyNEJSYnKF8CVDRGSSosHC0yT/xAAaAQEBAAMBAQAAAAAAAAAAAAAABAIDBQEG/8QAJBEAAgIBAwQCAwAAAAAAAAAAAAECAxEEITESFDJBcZETIkL/2gAMAwEAAhEDEQA/AHiAAAAAAAAAAAAAAAAAAAAAAAAAAEz0SXpBYwkIRKkoQlhqyW3lJIsj2EYcwTXRGTfGUrxDPIYwnnp2K9Cou5KSyivNLkK1zZvrTnxCRix1OGWnKneaa6X+w8sdFzEzCbtYTyU0uTt/iof8L6RqqGygi0n5xne30574hPJw3TTzUc4/zB/4xW6k8aX2kltWkvaQtzkkkqyEdtk4rkwnpa3xFfRzRhml7FTyLeKoyPjHRvC1LeXoJOoGe0+ucnL+8YhPPVCT1PE+rm65sQXOLOw0iM0TberaZ6z4TEyttk/J4+SK+qFTxjchDwbRbZlUD/M5P/QcnsH0ZLa1Emfcknb9pyd7xgsK12HmkOdiWX3T5B5ZrJx2UiXoie3Cji3cL0dx1aluLgsKUpR3NRmgrmZiVERg/tSonk9j3aRLj6EjAJ/ogpvjKX4lnkMOAKTHib4xl+JZ5DGdceqWDfp5dNiZCxW8yExGRZPmHhio1CVZKyPMMrqsI6ldyICqF/62D3nUcpCWpxycQzOpad8lJWN58yybLn4B5pUJyXLaaZSZrUsrWK9s9YYtEp0Kh05uHBRooT85R/OWe1Rnvn+shw9RDLwU2a6NVf6+Xo7U+BHpcNMaMkySWZmetR75nvjLjlhq/ILfHkW8i+a/YI7MvaJw7L0t5Pc6rcHJ1V21/hPkGhKaO13s9vyTHJ1zsa7HsMaO3k3lkktUiawf2pUTyex7tIlxD4P7UqJ5PY92kTA+qMwCoxuV8YTPEs8hhrj5/wCiXVil4nkyYry0t2S0g0L0dIk5Gr0jZVNQllnqeCcjJ4BIN5kFSmdLy0ZMvPVaQefBq15jHXCZlozZ2eq0lWfgy4RulqIy5Ri5WemOmA4li/S0kRnrPaYkDmWLWEL1zm7J9S80tXN4PSNk1eaRfTagrLK8tWZ/q3pEk4VyecE0q75PzHc7MM9o49PM9oSaqnNNRmVQqWf82r2ZDHXGdrKo1H1tXMND00PRqlpbpczHcTw2U92Nd/snyBJInzj1VGo+tKHRmbPUskrqU8iVl9KUPO2iauxsz5H0hg7tSonk+P7tImBXcBVBmfheClrJUVpEdad40pIi9JWMWIUnUK3jyslSKGsm12kyrtNWPMrl8pXmL2mQSFSZaecSpScyKxWUZf5D/rVAptbJsqiybhtX6WpLikGm+vUfBtETuf0DuUn1hfOAEV1MwSTIm9f3jHI2GCv2O5X1aRh9bn2H+4yPWFc4xue4e7g/x6gAhOkMH+5L+owdIYI7kyV/xGH3ueYd7g/x6hjc7w73u/x6gAhOp45aOg1YiPaZ8A2NpB2um/hMPjc6w53u/wAernBuc4b72e49QARBkRpJJ6ittG7LTSlpJTabX4Q9dzrDnez3HqAXQ7w4X8M9x6gBS8B1pNJrDbaz0YsqzTmeRH9VXpy8BmHAKu3gDDqFaSojrhfZW+u3KLORWKwAyAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" ,
    qty1:1
  }
}
updateHandler=(val) =>{
  if(this.state.product.qty == 0 && val === -1){
    console.log("sas");
    alert("Product Quantity cannot be less than 0")
  }
  else{
    this.setState({product:{...this.state.product,qty:this.state.product.qty+val}})
  }
}
updateHandler1=(val) =>{
  if(this.state.product1.qty1 == 0 && val === -1){
    console.log("sas");
    alert("Product Quantity cannot be less than 0")
  }
  else{
    this.setState({product1:{...this.state.product1,qty1:this.state.product1.qty1+val}})
  }
}
  render() {
   const {product:{id,name,price,image,qty}}=this.state 
   const {product1:{id1,name1,price1,image1,qty1}}=this.state 
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <h2>Product Component</h2>
        <table className='table table-striped'>
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
            <tbody id='user' className='table '>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td><img src={image} alt="" style={{height:'100px'}}/></td>  
                <td>{price}</td>
                <td><button onClick={this.updateHandler.bind(this,-1)}>-</button>
                  {" "+qty+" "}
                  <button onClick={this.updateHandler.bind(this,1)}>+</button>
                  </td>
                <td>{price*qty}</td>
              </tr>
              <tr>
                <td>{id1}</td>
                <td>{name1}</td>
                <td><img src={image1} alt="" style={{height:'100px'}}/></td>  
                <td>{price1}</td>
                <td><button onClick={this.updateHandler1.bind(this,-1)}>-</button>
                  {" "+qty1+" "}
                  <button onClick={this.updateHandler1.bind(this,1)}>+</button>
                  </td>
                <td>{price1*qty1}</td> 
              </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default productSingleHandler
