import React ,{useEffect} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
 
function Login() {
  let history = useHistory();
    return(
<div className="Login">
      <h2>Login</h2> 
      <form id="form" onSubmit={checkUser}>
      {/* <label for="">Your Email:</label> */}
      <input type="email"  id="usermail" name="usermail" placeholder="Enter email"></input>
      {/* <label for="">password</label> */}
      <input type="password"  id="password" name="password" placeholder="password"></input>
      <input type="submit"  id="Login" name="Login" value="Login"></input>
</form>
      </div>
      )
      function checkUser(e) {

        e.preventDefault();
        const  usermail  = e.target.usermail.value;
        const password= e.target.password.value;
        fetch('/checkUserExist', {
          method: 'POST',
          body: JSON.stringify({ usermail,password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
      
            if (data[0].success) {
              history.push('/ToDo');
      
            }
      
           })
      
    }
  }

export default Login;