import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/reducers/authenticationSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [heading, setHeading] = useState(false);

  // const role = useSelector((state) => state.authentication.role);

  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));

    if (username === "admin" || username === "user") {
      navigate("/", { replace: true });
    }

    setHeading(true);
  };

  return (
    <div className="container mt-5">
      <h2
        className="text-center text-uppercase m-5"
        style={{ letterSpacing: "5px", fontWeight: "ligher" }}
      >
        Login
      </h2>

      {/* incorrect username or password */}
      {heading && !isAuthenticated && (
        <div className="alert alert-danger" role="alert">
          Incorrect username or password
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="border rounded p-4"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Password:
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ color: "white" }}
        >
          Login
        </button>
      </form>

      <div className="text-center mt-5">
        <h4>Test Credentials</h4>
        <p>Username: admin</p>
        <p>Password: admin123</p>

        <p>Username: user</p>
        <p>Password: user123</p>
      </div>
    </div>
  );
};

export default Login;
