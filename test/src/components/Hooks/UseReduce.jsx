import React from 'react'
import { useReducer } from 'react'

const reducer=(state,action)=>{
   switch(action.type){
    case "INCREMENT":
      return{...state,count:state.count+1,name:action.payload}
      case 'DECREMENT':
        return {...state,count:state.count-1,name:action.payload };
      default:
        return state;
   }
}

const UseReduce = () => {
    const initialState={count:0,name:''}
    const [state,dispatch]=useReducer(reducer,initialState)

    const incrHandler=()=>{
      dispatch({type:'INCREMENT',payload:'INCREMENT'})
    }
    const decrHandler=()=>{
      dispatch({type:'DECREMENT',payload:'DECREMENT'})
    }
  return (
    <div>
        <div>
            <p>{state.name}</p>
            <button onClick={decrHandler}>-</button><h1>{state.count}</h1><button  onClick={incrHandler}>+</button>
        </div>
    </div>
  )
}

export default UseReduce
