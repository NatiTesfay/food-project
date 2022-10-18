import React, { useState } from 'react';
import './login.css';

const Login = () => {
 




  return (
    

<form className="form-inline" action="/action_page.php">
  <label for="text">First Name:</label>
  <input type="text" className='input' placeholder="Enter Name" name="email"/>
  <label for="text">Last Name:</label>
  <input type="text" className='input' placeholder="Enter Last Name" name="email"/>
  <label for="date">Birth Date:</label>
  <input type="date" className='input' placeholder="Enter Birth Date" name="email"/>
  <label for="pwd">Password:</label>
  <input type="password" className='input' placeholder="Enter password" name="pswd"/>
  <label for="pwd"> confirm Password:</label>
  <input type="password" className='input' placeholder="Confirm password" name="pswd"/>
  <label>
  <input type="checkbox" name="remember"/> Remember me
  </label>
  <br />
  <button type="submit">Sing in</button>
</form>
 
  )
}

export default Login;