import  Axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Hook =()=>{
    const [val,setVal]=useState([])
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log("mounted ")
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            setVal(resp.data)
            console.log("state changing")
        })
        .catch((err)=>{
            console.log(err)
        })
        return ()=>{
            console.log("effect changed")  
        }
    },[counter]);
    const getData=()=>{
        setCounter((c)=>c+1);
        }

    return(
        <>
        <h1>Hooks</h1>
        <h1 onClick={getData}>{counter} +</h1>
        {
            val.map((user)=>(
                <h4 key={user.id}>{user.name}</h4>
            ))
        }
        
        </>
    )

}

export default Hook;