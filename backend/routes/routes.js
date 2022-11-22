const express = require("express");
const router = express.Router();
const BookController = require("../controller/controller");

router.post("/newbook", BookController.createNewBook);

router.post("/update/:id", BookController.updateBook);

router.delete("/delete/:id", BookController.deleteBook);

router.get("/allbooks", BookController.allBooks);

router.get("/search/:title", BookController.findBooks);

module.exports = router;
