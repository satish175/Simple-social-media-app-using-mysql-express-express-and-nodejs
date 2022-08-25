import React, { useState } from "react";
import "./login.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const login = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        navigate("/");
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="loginForm">
        <input
          type="text"
          placeholder="Username.."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password.."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>

        <h3 style={{ color: "red", fontFamily: "sans-serif" }}>
          {errorMessage}
        </h3>
      </div>
    </div>
  );
}
