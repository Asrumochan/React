import React, {useState} from 'react';
import "./App.css";

function App() {
  const [str, setStr] = useState("Hello");
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);
  const [isBool, setBool] = useState(true);
  const [obj, setObj] = useState({name: 'A', city:'NY'});
  const [arr, setArr] = useState([1,2,4]);

  const changeStates = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setStr("Hello  " + randomNumber);
    setNum(randomNumber);
    setBool(!isBool);
    setObj({...obj, name:'B'});
    setArr([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)])  ;
    setNum1(Math.floor(Math.random() * 1000));
    setNum2(Math.floor(Math.random() * 1000));
    // setRes(num1+num2)
  }

  const changeValue=()=>{
    setRes(num1+num2);
  }
	return (
		<>
			<h1>Addition calculator</h1>
      <p>{str}</p>
      <p>This is num: {num}</p>
      <p>{isBool ? 'True' : 'False' }</p>
      <p>this is arr {arr[0]}, {arr[1]}, {arr[2]}</p>
      <p>This is {obj.name} and from {obj.city}</p>

      <button onClick={changeStates}>Change String</button><br/><br/>

      <p>{num1} <button onClick={changeValue}>+</button> {num2} = <span>{res}</span></p>
		</>
	);
}

export default App;