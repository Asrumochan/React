import React, { Component } from 'react'
import Axios from 'axios'
class test extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.users)}</pre>
        {
            this.state.users.length>0 ?<> 
                <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <thead>
                    {
                     this.state.users.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                     })
                    }
                </thead>
            </table>
             </>  : <h3>No Data</h3>
        }
      </div>
    )
  }
}

export default test
