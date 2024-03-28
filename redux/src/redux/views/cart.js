import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../mesage/message.action'

const Cart = () => {
    const dispatch = useDispatch()
    const product =useSelector((product)=> {
        return product
    })
    const decrHandler=()=>{
        dispatch(decrAction())
    }
    const incrHandler=()=>{
        dispatch(incrAction())
    }
  return (
    <div>
      <h1> Product Cart</h1>
            <table className='table table-striped'> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td><img src={product.image} style={{height:"100px",width:"100px"}} alt="" /></td>
                            <td>{product.price}</td>
                            <td>
                                <button disabled={product.qty===1} onClick={decrHandler}>-</button> {product.qty} <button onClick={incrHandler}>+</button> </td>
                            <td>{product.price*product.qty}</td>
                        </tr>
                    </tbody>
            </table>
    </div>
  )
}

export default Cart
