import { INCR,DECR} from "./message.action";

let product={
    name:'Pixel 7a',
    image:'https://lh3.googleusercontent.com/DlfqDLdyiyAAFokL8yKnm5SGmUMenQZqtKarVmmYxeussXr5hgFiMxRfbXWaWnEaCQxL-Gm9sh3dI2ls8mgIUjG3aDYWdcFLFFU=rw-e365-w3000',
    price:38999,
    qty:1
}
let productReducer=(state=product,action)=>{
    switch(action.type){
        case INCR: 
            return {...state,qty:state.qty+1}
        case DECR: 
            return {...state,qty:state.qty-1}
        default :
            return state
    }
}

export {productReducer}