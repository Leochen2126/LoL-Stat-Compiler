import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoginAccount from './components/LoginAccount';
import CreateAccount from './components/CreateAccount';

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [backendData, setBackendData] = useState([{}])
  async function addCount() {
    //alert('You clicked me!');
    await fetch("/addcouter", {method: 'POST'})
    fetch("/couter").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }
  useEffect( () => {
    fetch("/couter").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>this.backendData</code> and save to reload.
    //     </p>
    //     <h3>{backendData.users}</h3>

    //     <button onClick={() => addCount()}>Default</button>
    //   </header>
    // </div>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
        <i class="bi bi-graph-up"></i>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-dash" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg> */}
          { " LoL Team Tracker " }
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <Link to={"/home"} className="nav-link">
              Home
            </Link> */}
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              {/* <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link> */}
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              {/* <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link> */}
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              {/* <Link to={"/user"} className="nav-link">
                User
              </Link> */}
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a> */}
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        {
          <Routes>
            <Route exact path="/login" element={<LoginAccount />} />
            <Route exact path="/register" element={<CreateAccount />} />
          </Routes>
          
        /* <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes> */}
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
}

export default App;
