import React, { useState } from "react";
import'./loginPage.css'
import { useNavigate  } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // Replace 'API_ENDPOINT' with your actual API endpoint for user authentication
      const response = await fetch("http://localhost:8080/api/login/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log({ email, password });
      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      // Authentication successful, you can redirect or perform other actions here
      console.log("Authentication successful");
      localStorage.setItem("email", email);
      navigate("/profile");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className = "parent container-fluid">
      <div className="child p-3  ">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>
          Username:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mt-1"
          />
        </label>
        <br />
        <label className="mt-2 ">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mt-1"
          />
        </label>
        <br />
        <button onClick={handleLogin} className="btn btn-primary mt-2">Login</button>
        <p className="mt-2">Need an account? <span  onClick={()=>{navigate("/");}}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default LoginPage;
