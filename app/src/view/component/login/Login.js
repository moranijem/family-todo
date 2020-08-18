import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  return (
    <div className="Login">
      <h2>Login</h2>
      <form id="form" onSubmit={checkUse}>
        {/* <label for="">Your Email:</label> */}
        <input type="email" id="usermail" name="usermail" placeholder="Enter email"></input>
        {/* <label for="">password</label> */}
        <input type="password" id="password" name="password" placeholder="password"></input>
        <input type="submit" id="Login" name="Login" value="Login" ></input>
      </form>
    </div>
  )
  function checkUse(e) {

    e.preventDefault();
    const usermail = e.target.usermail.value;
    const password = e.target.password.value;
    fetch('/checkUserExist', {
      method: 'POST',
      body: JSON.stringify({ userEmail: usermail, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data[0].success) {
          localStorage.setItem("lastName", data[1].doc[0].lastName);
          localStorage.setItem("_id", data[1].doc[0]._id);
          history.push('/ToDo');

        }
        else{
          alert("Try Again..")
        }

        // const{success[0],doc
      })

  }
}

export default Login;