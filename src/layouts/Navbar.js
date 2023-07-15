import React from "react";
import { Link } from "react-router-dom";
import { login } from "../store/reducers/authenticationSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const UserLogin = () => {
    const handleLogin = () => {
      // Simulate form input
      const username = "user";
      const password = "user123";

      dispatch(login({ username, password }));
    };

    return (
      <button className="btn btn-text" onClick={handleLogin}>
        User Login
      </button>
    );
  };

  // Admin login component
  const AdminLogin = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
      // Simulate form input
      const username = "admin";
      const password = "admin123";

      dispatch(login({ username, password }));
    };

    return (
      <button className="btn btn-text" onClick={handleLogin}>
        Admin Login
      </button>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Article Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <UserLogin />
            <AdminLogin />

            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Show Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-book">
                Add Book
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
