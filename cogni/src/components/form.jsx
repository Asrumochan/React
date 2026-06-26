import React,{useState} from 'react'
import './styles.css'
const Form =()=>{
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('Form submitted',name ,Number(age))
        setAge('')
        setName('')
    }
    return( 
        <form onSubmit={submitHandler}>
        <div>
          <label>Enter the name : </label>
          <input type='text' onChange={(e)=>setName(e.target.value)} required value={name}/>
        </div>
        <div>
          <label>Enter the age : </label>
          <input type='number' onChange={(e)=>setAge(e.target.value)} required value={age}/>
        </div>
         <button type='submit' >Send</button>
      </form>
    )
}
 export default Form