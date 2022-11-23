import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./book.css";

export const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        let res = await axios.get("http://localhost:8001/api/allbooks");
        setBooks(res.data.data);
      } catch (error) {
        console.log({ message: "Fetch Error", error });
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("id", id);
      await axios.delete("http://localhost:8001/api/delete/" + id);
      window.location.reload();
    } catch (error) {
      console.log({ message: "Fetch Error", error });
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-5 text-center text-primary">
        <b>All Books</b>
      </h1>

      <div className="row mt-5 mb-5">
        {books.map((book) => (
          <div className="col-md-3 mb-5" key={book.id}>
            <div className="card">
              {book.cover && <img src={book.cover} alt="Loading..." />}
              <div
                className="card-body overflow-auto"
                style={{ height: "350px" }}
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Title:</b>
                    {book.title}
                  </li>
                  <li className="list-group-item">
                    <b>Desc:</b>
                    {book.desc}
                  </li>
                  <li className="list-group-item">
                    <b>Price:</b>
                    {book.price}
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <Button className="btn btn-warning">
                  <Link to={`/update/${book.id}`}>Update Book</Link>
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete Book
                </Button>
              </div>
            </div>
          </div>
        ))}
        <Link to="/add" className="text-center mb-2">
          <span className="btn btn-primary ">Add New Book</span>
        </Link>
      </div>
    </div>
  );
};
