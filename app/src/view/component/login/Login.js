import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
    return(
<div className="Login">
      <h2>Login</h2>
      <form id="form">
      <label for="">Email:</label>
      <input type="email"  id="usermail" name="usermail" placeholder="Enter email"></input><br></br><br></br>
      <label for="">password</label>
      <input type="password"  id="password" name="password" placeholder="password"></input><br></br><br></br>
      <input type="button"  id="Login" name="Login" value="Login" onClick={checkUse}></input><br></br><br></br>
      </form>
      </div>
      
      )
      function checkUse(e) {

        e.preventDefault();
        // const { username, UserLName, Password } = e.target.elements.value;
        let usermail=document.getElementById("usermail").value;
        let password=document.getElementById("password").value;

        fetch('/checkUserExist', {
          method: 'POST',
          body: JSON.stringify({ usermail, password }),
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