import { Link } from "react-router-dom"
import React,{Component} from 'react'
const users=[{id:1,name: 'user 1'}, {id:2,name:'user 2'}, {id:3,name:'user 3'}]
class Home extends Component{
  render(){
    console.log(this.props)
      return (
          <><ul>          
            {
                users.map((user) =>(
                    <li key={user.id} >
                        <Link to={`/user/${user.id}`} >{user.name}</Link>
                    </li>
                    ))
                    
            }
            </ul>
           </>
  )
}
}
export default Home
