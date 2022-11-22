import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        let res = await axios.get("http://localhost:8001/api/search/book");
        setBooks(res.data.data);
      } catch (error) {
        console.log({ message: "Fetch Error", error });
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="Loading..." />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <h3>{book.price}</h3>
          </div>
        ))}
      </div>
      <Link to="/add">
        <button>Add New Book</button>
      </Link>
    </div>
  );
};
