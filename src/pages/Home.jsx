import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducers/authenticationSlice";
import { useSelector } from "react-redux";

// User login component

const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const role = useSelector((state) => state.authentication.role);

  const UserLogin = () => {
    const handleLogin = () => {
      // Simulate form input
      const username = "user";
      const password = "user123";

      dispatch(login({ username, password }));
    };

    return <button onClick={handleLogin}>User Login</button>;
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

    return <button onClick={handleLogin}>Admin Login</button>;
  };

  const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
    };

    return <button onClick={handleLogout}>Logout</button>;
  };

  if (!isAuthenticated) {
    return <div>Please log in.</div>;
  }

  return (
    <>
      <h2>User Profile</h2>
      <p>Role: {role}</p>
      <Logout />

      <AdminLogin />
      <UserLogin />
    </>
  );
};

export default Home;
