import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const role = useSelector((state) => state.authentication.role);
  // Replace this with your actual authentication logic
  const isLoggedIn = isAuthenticated;

  if (isLoggedIn) {
    // Check if the user role is 'admin' or 'user'
    if (role === "admin" || role === "user") {
      return <Outlet />;
    } else {
      // If the role is not recognized, redirect to 404 page or any other appropriate page.
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
