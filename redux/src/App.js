import Cart from './redux/views/cart'
import {Provider} from 'react-redux'
import { store } from './redux/store';
function App() {
  return (
    <>
    <Provider store={store}>
    <Cart/>
    </Provider>
    </>
  );
}

export default App;
