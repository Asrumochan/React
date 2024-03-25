import Home from './components/home'
import User from './components/user'
import {BrowserRouter as Router , Routes, Route ,Navigate} from 'react-router-dom';
function App() {
  return (
    <>
    <h1>Home</h1>
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/user/:id" element={<User />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
