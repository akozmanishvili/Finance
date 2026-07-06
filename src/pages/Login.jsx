import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState(``);
  const [password, setPassword] = useState(``);
  const { loggedIn, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "admin" && password === "1234") login();
  };

  if (loggedIn) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>Finance Tracker</h1>
        <p>Sign in to manage your transactions</p>
        <form>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
