import {  NavLink } from "react-router-dom"
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
                        <NavLink to={`/user/${user.id}`} className={({isActive})=>{return (isActive ? "link-active":"")}} >{user.name}</NavLink>
                    </li>
                    ))
                    
            }
            </ul>
           </>
  )
}
}
export default Home
