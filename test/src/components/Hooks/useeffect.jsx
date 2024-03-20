import  Axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Hook =()=>{
    const [val,setVal]=useState([])
    const [counter,setCounter]=useState(0)

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            setVal(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log("val changed")  
    },[counter])
    const getData=()=>{
        setCounter((c)=>c+1);
        }

    return(
        <>
        <h1 onClick={getData}>Hooks</h1>
        <h1>{counter}</h1>
        {
            val.map((user)=>(
                <h4>{user.name}</h4>
            ))
        }
        
        </>
    )

}

export default Hook;