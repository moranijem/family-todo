import React, { useState } from 'react'
import './Register.css'
import { useHistory } from 'react-router-dom';
function Register() {
  // const [statusUser, setstatusUser] = useState(false);
  let history = useHistory();

  return (
    <div className="Register">
      <h2>Register</h2>
      <form>
        
      <label for="">First-Name</label>
      <input type="text" id="username" name="username" placeholder="username"></input><br></br><br></br>
      <label for="">Last-Name</label>
      <input type="text" id="UserLName" name="UserLName" placeholder="UserLName"></input><br></br><br></br>
      <label for="">Useremail</label>
      <input type="email" id="Useremail" name="Useremail" placeholder="Useremail"></input><br></br><br></br>
      <label for="">Img-Url</label>
      <input type="text" id="img" name="img" placeholder="img"></input><br></br><br></br>
      <label for="">Password</label>
      <input type="Password" id="Password" name="Password" placeholder="Password"></input><br></br><br></br>
      <input type="button" id="Register" name="Register" value="Register" onClick={registerUser} ></input><br></br><br></br>
      </form>
    </div>


  )

  function registerUser(e) {

    e.preventDefault();
    const { username, UserLName, Useremail, img, Password } = e.target.elements.value;
    fetch('/Register', {
      method: 'POST',
      body: JSON.stringify({ username, UserLName, Useremail, img, Password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
  
        if (data[0].success) {
          history.push('/Login');
  
        }
  
        // const{success[0],doc
      })
  
  }
}


export default Register;