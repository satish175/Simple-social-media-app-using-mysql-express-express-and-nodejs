import React, { useState } from "react";
import "./register.css";
import Axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="register">
      <h1>Create account here</h1>
      <div className="registerForm">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}
