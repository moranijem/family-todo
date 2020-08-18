import React, { useState } from 'react'
import './Register.css'
import { useHistory,Link } from 'react-router-dom';
function Register() {
  // const [statusUser, setstatusUser] = useState(false);
  let history = useHistory();

  return (
    <div className="Register">
      <h2>Register</h2>
      <form id="form1"> 
      
      <input type="text" id="firstName" name="username" placeholder="username"></input>
      
      <input type="text" id="lastName" name="UserLName" placeholder="UserLName"></input>
     
      <input type="email" id="userEmail" name="Useremail" placeholder="Useremail"></input>
      
      <input type="text" id="imgUrl" name="img"placeholder="img "></input>
      
      <input type="Password" id="password" name="Password" placeholder="Password"></input>
      <input type="button" id="Register" name="Register" value="Register" onClick={registerUser}></input>
      <div className="li">
      <Link to="/Login">PRESS HERE TO LOGIN</Link>
      </div>
    </form>
    </div>


  )

  function registerUser(e) {

    e.preventDefault();
    // const { username, UserLName, Useremail, img, Password } = e.target.elements.value;
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let userEmail=document.getElementById("userEmail").value;
    let password=document.getElementById("password").value;
    let imgUrl=document.getElementById("imgUrl").value;

    fetch('/Register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, userEmail, password, imgUrl }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
  
        if (data[0].success) {
          history.push('/Login');
        }
        else{
          alert("User Exist on DB Try Again or Login..");
        }
  
        // const{success[0],doc
      })
  
  }
}


export default Register;