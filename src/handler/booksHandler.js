import { books } from "../data/books.js";

//handler buat semua buku
export const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

//menambahkan buku
export const addBookHandler = (req, res) => {
  const { name, author } = req.body;

  //validasi
  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }

  const id = Date.now();
  //wadah
  const newBook = { id, name, author };

  books.push(newBook);

  res.status(201).json({
    status: "success",
    message: "Data berhasil ditambahkan",
    data: {
      bookid: id,
    },
  });
};

//mendapatkan buku berdasarkan ID
export const getBookByIdHandler = (req, res) => {
  const { bookid } = req.params;
  const numeric = Number(bookid);

  const book = books.find((b) => b.id === numeric);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Buku tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: { book },
  });
};

//mengubah data buku berdasarkan ID
export const updateBookByIdHandler = (req, res) => {
  const { bookid } = req.params;
  const numeric = Number(bookid);
  const { name, author } = req.body;
  const book = books.find((b) => b.id === numeric);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Buku tidak ditemukan",
    });
  }

  book.name = name;
  book.author = author;

  res.status(200).json({
    status: "success",
    message: "Yeaaay, Buku berhasil diubah",
    data: { book },
  });
};

//menghapus buku berdasarkan ID
export const deleteBookByIdHandler = (req, res) => {
  const { bookid } = req.params;
  const numeric = Number(bookid);
  const bookIndex = books.findIndex((b) => b.id === numeric);

  const book = books.find((b) => b.id === numeric);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Buku tidak ditemukan",
    });
  }

  const index = books.indexOf(book);
  books.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: "Yeaaaay, Buku berhasil dihapus",
  });
};
