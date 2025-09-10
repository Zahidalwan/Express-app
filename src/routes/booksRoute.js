import express from "express";
import {
  addBookHandler,
  deleteBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
} from "../handler/booksHandler.js";

//Variable router
const router = express.Router();

//routing
router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);
router.get("/books/:bookid", getBookByIdHandler);
router.put("/books/:bookid", updateBookByIdHandler);
router.delete("/books/:bookid", deleteBookByIdHandler);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
