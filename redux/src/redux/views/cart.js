import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../mesage/message.action'

const Cart = () => {
    const dispatch = useDispatch()
    const product =useSelector((product)=> {
        return prodduct 
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
                    <tbody >
                        <tr>
                            <td style={{alignContent:'center'}}>{product.name}</td>
                            <td><img src={product.image} style={{height:"100px",width:"100px"}} alt="" /></td>
                            <td style={{alignContent:'center'}}>{product.price}</td>
                            <td style={{alignContent:'center'}}>
                                <button disabled={product.qty===1} onClick={decrHandler}>-</button> 
                                {product.qty}
                                 <button onClick={incrHandler}>+</button> </td>
                            <td style={{alignContent:'center'}}>{product.price*product.qty}</td>
                        </tr>
                    </tbody>
            </table>
    </div>
  )
}

export default Cart
