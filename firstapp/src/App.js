import './App.css';
import Home from './components/home';
import About from './components/about';
import Career from './components/careers';
import Login from './components/login';
import './style.css'

function App() {
  return (
    <div >
      <div>
        <ul className='list'>
            <li> <Home/></li>
            <li>  <About/></li>
            <li>  <Career/></li>
        </ul>
        <div>
          <Login/>
        </div>
      </div>   
    </div>
  );
}

export default App;
