import { useEffect, useState } from 'react'
import Axios  from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
     Array.from({length:10}).map(()=>{
      Axios.get('https://dog.ceo/api/breeds/image/random')
     .then((res)=>{
      setData((prev)=>([...prev,res.data]))
     }).catch((err)=>{
      console.log(err)
     })
     })
  },[])
  return (
    <>
    <pre>{JSON.stringify(data)}</pre>
    {
      data.map((val)=>(
        <img height={"200px"} width={"210px"} src={val.message} alt="" />
      ))
    }
    </>
  )
}

export default App
