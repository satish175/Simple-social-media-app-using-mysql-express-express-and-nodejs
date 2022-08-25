import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  if (loggedIn) {
    return (
      <div className="navbar">
        {/* <Link to="/">
          <span>Home</span>
        </Link> */}
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/upload">Upload</a>
        
      </div>
    );
  }
  return (
    <div className="navbar">
      <a href="/home">Home</a>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
  setLoggedIn(false);
  //  loggedIn ? ( //{" "}
  // <>
  //  <a href="/profile">Profile</a>
  //  <a href="/upload">Upload</a>
  // {" "}
  // </>
  //  ) : ( //{" "}
  //  <>
  //  <a href="/register">Register</a>
  //  <a href="/login">Login</a>
  // {" "}
  // </>
  // ) setLoggedIn(!loggedIn);
  // </div>
}
