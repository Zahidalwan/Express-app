import express from "express";

//membuat server
const app = express();

//menentukan port
const PORT = 5000;

//data store
const books = [
  {
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 2,
    name: "Deep Work",
    author: "Cal Newport",
  },
  {
    id: 3,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
  },
];

//handler
const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: {
      books,
    },
  });
};

//routing
app.get("/books", getAllBooksHandler);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//mennjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
