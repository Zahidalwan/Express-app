import express from "express";

//membuat server
const app = express();

//menentukan port
const PORT = 5000;

//mennjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
