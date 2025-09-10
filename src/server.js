import express from "express";
import router from "./routes/booksRoute.js";
import productsRouter from "./routes/productsRoute.js";

//membuat server
const app = express();

app.use(express.json());

//menentukan port
const PORT = 5000;

app.use(router);
app.use(productsRouter);

//mennjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
