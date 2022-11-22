const express = require("express");
const router = express.Router();
const BookController = require("../controller/controller");

router.post("/newbook", BookController.createNewBook);

router.get("/search/:title", BookController.findBooks);

module.exports = router;
