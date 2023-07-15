import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducers/authenticationSlice";

const dispatch = useDispatch();

export const UserLogin = () => {
  const handleLogin = () => {
    // Simulate form input
    const username = "user";
    const password = "user123";

    dispatch(login({ username, password }));
  };

  return <button onClick={handleLogin}>User Login</button>;
};

// Admin login component
export const AdminLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate form input
    const username = "admin";
    const password = "admin123";

    dispatch(login({ username, password }));
  };

  return <button onClick={handleLogin}>Admin Login</button>;
};

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};
