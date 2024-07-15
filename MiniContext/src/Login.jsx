import React, { useContext, useState } from 'react'
import UserContext from './UserContext/UserContext';
function Login() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const {setuser}=useContext(UserContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        setuser({username,password});
    }
  return (
    <div>
        <h1>Login</h1><br/>
        <form onSubmit={handleSubmit}>
        <input type='text' 
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder='Username'/>
        <input type='text' 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        placeholder='Password'/>
        <button>Submit</button>
        </form>
    </div>

  )
}

export default Login