const { Books, sequelize } = require("../models");
const { Op } = require("sequelize");
const BookController = {};

BookController.createNewBook = async (req, res) => {
  try {
    const newBook = req.body;
    const saveBook = await Books.create(newBook);
    return res.status(201).send({ status: "success", data: saveBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updateBook = req.body;
    const saveUpdate = await Books.update(updateBook, {
      where: {
        id: bookId,
      },
    });
    console.log("update", saveUpdate);
    return res.status(201).send({ status: "success", data: saveUpdate });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.allBooks = async (req, res) => {
  try {
    const allBook = await Books.findAll({
      order: sequelize.literal("created_at DESC"),
    });
    return res.status(200).send({ status: "success", data: allBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.findBooks = async (req, res) => {
  try {
    const searchTitle = req.params.title;
    const findBook = await Books.findAll({
      where: { title: { [Op.iLike]: `%${searchTitle}%` } },
      order: sequelize.literal("created_at DESC"),
    });
    return res.status(200).send({ status: "success", data: findBook });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

BookController.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    await Books.destroy({
      where: {
        id: bookId,
      },
    });
    return res.status(201).send({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error });
  }
};

module.exports = BookController;
