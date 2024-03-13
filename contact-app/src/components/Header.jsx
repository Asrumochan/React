import Data from './data.json'
import { useState } from 'react'
const Header = () => {
const [data,setData]=useState(Data)
const getAlert=(e)=>{ 
  alert(e)
}
  return (
            <table className='table table-striped '>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>NAME</td>
                  <td>EMAIL</td>
                  <td>GENDER</td>
                </tr>
              </thead>  
              <tbody >
                  {
                     data.map((val)=>(
                      <tr onClick={()=>getAlert(val.id)}> 
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.gender}</td>
                      </tr>
                      ))
                  }
              </tbody>
            </table>
  )
}
export default Header
