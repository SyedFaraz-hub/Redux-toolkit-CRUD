import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";
// import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import Login from "../features/Login/Login";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<BooksView />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />

        {/* private routes */}
        <Route exact path="/add-book" element={<PrivateRoute />}>
          <Route exact path="/add-book" element={<AddBook />} />
        </Route>

        <Route exact path="/edit-book" element={<PrivateRoute />}>
          <Route exact path="/edit-book" element={<EditBook />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Index;
