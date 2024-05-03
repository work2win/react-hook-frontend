import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './login.css';
import PropTypes from 'prop-types';

const Login= ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginHotel(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }

    const handleSubmit = async e => {
      
    e.preventDefault();
    const token = await loginHotel({
      username,
      password
    });
   
    setToken(token);
    }
    
    return(
    <div className="login-style">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <br></br>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
    );
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}
export default Login;
