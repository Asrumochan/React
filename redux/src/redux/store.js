import {createStore} from 'redux'
import {productReducer} from '../redux/mesage/message.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'

let store = createStore(productReducer,composeWithDevTools())

export {store}