import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  return (
    <div className="Login">
      <h2>Login</h2>
      <label for="">First-Name</label>
      <input type="text"  id="username" name="username"></input><br></br><br></br>
      <label for="">Last-Name</label>
      <input type="text" id="UserLName" name="UserLName"></input><br></br><br></br>
      <label for="">password</label>
      <input type="password"  id="password" name="password"></input><br></br><br></br>
      <input type="button"  id="Login" name="Login" value="Login" onClick={checkUse}></input><br></br><br></br>

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
}
export default Login;