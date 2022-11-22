import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBooks] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/api/newbook", book);
      navigate("/");
    } catch (error) {
      console.log({ message: "unable to post book", error });
    }
  };

  const handleChange = (e) => {
    setBooks((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      msg: console.log("prev", prev),
    }));
  };
  console.log("book", book);

  return (
    <div>
      <div className="form">
        <h1>Add New Book</h1>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="text"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />

        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};
