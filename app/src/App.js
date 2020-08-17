import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/ToDo">ToDo</Link>
            </li>
            <li>
              <Link to="/Mission">Mission</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ToDo">
            <ToDo />
          </Route>
          <Route path="/Mission">
            <Mission/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return(
    <div className="homepage">
    <h2>Login</h2>
    <label for="">User-Name</label>
    <label for="">User-LName</label>
    <label for="">Useremil</label>
    <label for="">Img-Url</label>
    <label for="">Password</label>
    </div>
    

  ) 
}

function Register() {
  return <h2>Register</h2>;
}

function ToDo() {
  return <h2>ToDo</h2>;
}

function Mission() {
  return <h2>Mission</h2>;
}


export default App;
