import React, { useState } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

const Home = () => {
  const users = [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
    { id: 3, name: 'user 3' }
  ];
 let navigate = useNavigate();
 const [name,setName]=useState('')
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>{navigate('/login',{replace:true ,state:{name}})}}>Login</button>
      <button onClick={()=>{navigate('/register')}}>Register</button>
      <hr />
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
};

export default Home;
