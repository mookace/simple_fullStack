import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
    }));
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-5 text-center text-primary">
          <b>Add Book</b>
        </h1>

        <div className="row mt-5">
          <div className="col-md-3">&nbsp;</div>
          <div className="col-md-6">
            <div className="card">
              <div class="card-body">
                <Form>
                  <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book Title"
                      onChange={handleChange}
                      name="title"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      onChange={handleChange}
                      name="desc"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Price"
                      onChange={handleChange}
                      name="price"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Cover</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cover"
                      onChange={handleChange}
                      name="cover"
                    />
                  </Form.Group>

                  <Button onClick={handleClick}>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
