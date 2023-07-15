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

  if (!isAuthenticated) {
    return <div>Please log in.</div>;
  }

  return (
    <>
      <h2>User Profile</h2>
      <p>Role: {role}</p>
    </>
  );
};

export default Home;
