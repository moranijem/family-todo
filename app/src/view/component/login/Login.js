import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
    return(
<div className="Login">
      <h2>Login</h2> 
      <form id="form">
      {/* <label for="">Your Email:</label> */}
      <input type="email"  id="usermail" name="usermail" placeholder="Enter email"></input>
      {/* <label for="">password</label> */}
      <input type="password"  id="password" name="password" placeholder="password"></input>
      <input type="button"  id="Login" name="Login" value="Login" onClick={checkUse}></input>
</form>
      </div>
      )
      function checkUse(e) {

        e.preventDefault();
        const { username, UserLName, Password } = e.target.elements.value;
        fetch('/Register', {
          method: 'POST',
          body: JSON.stringify({ username, UserLName, Password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
      
            if (data[0].success) {
              history.push('/ToDo');
      
            }
      
            // const{success[0],doc
          })
      
    }
  }

export default Login;