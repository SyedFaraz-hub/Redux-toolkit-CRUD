import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteBook } from "../../store/reducers/BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const role = useSelector((state) => state.authentication.role);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="vh-100 ">
      <div className="container ">
        <br />
        <h2
          className="text-center text-uppercase mb-5 "
          style={{ letterSpacing: "5px", fontWeight: "ligher" }}
        >
          List of Articles
        </h2>

        <h4 className="text-center text-uppercase m-5">
          You are a: <span className="text-danger">{role}</span>
        </h4>

        <div className="mx-2">
          <Link to="/add-book">
            <button
              disabled={role === "visitor" ? true : false}
              type="button"
              className="btn btn-success me-2"
              style={{ color: "white" }}
            >
              Create Article
            </button>
          </Link>
        </div>

        <div
          className="row mb-5"
          style={{
            width: "100%",
          }}
        >
          {books &&
            books.map((book, index) => {
              const { id, title, author } = book;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card " style={{ margin: "10px 10px" }}>
                    <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link to="/edit-book" state={{ id, title, author }}>
                        <button type="button" class="btn btn-primary me-2">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(id);
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BooksView;
