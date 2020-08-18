import React, { useState } from 'react'
import './Register.css'
import { useHistory } from 'react-router-dom';
function Register() {
  // const [statusUser, setstatusUser] = useState(false);
  let history = useHistory();

  return (
    <div className="Register">
      <h2>Register</h2>
      <label for="">First-Name</label>
      <input type="text" id="firstName" name="username"></input><br></br><br></br>
      <label for="">Last-Name</label>
      <input type="text" id="lastName" name="UserLName"></input><br></br><br></br>
      <label for="">Useremail</label>
      <input type="email" id="userEmail" name="Useremail"></input><br></br><br></br>
      <label for="">Img-Url</label>
      <input type="text" id="imgUrl" name="img"></input><br></br><br></br>
      <label for="">Password</label>
      <input type="Password" id="password" name="Password"></input><br></br><br></br>
      <input type="button" id="Register" name="Register" value="Register" onClick={registerUser}></input><br></br><br></br>
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