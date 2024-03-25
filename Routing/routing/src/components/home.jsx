import React from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

const Home = () => {
  const users = [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
    { id: 3, name: 'user 3' }
  ];
 let navigate = useNavigate();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
      <button onClick={()=>{navigate('/login',{replace:true})}}>Login</button>
      <button onClick={()=>{navigate('/register')}}>Register</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
};

export default Home;
