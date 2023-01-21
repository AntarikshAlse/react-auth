import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      }),
    });
    let data = await response.json();
    if (data.id) {
      localStorage.setItem("user", JSON.stringify(data));
      setAuth(true);
      navigate("/");
    } else {
      alert(data.message || "Invalid username or password");
    }
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="card bg-light">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            required
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            required
            name="password"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
