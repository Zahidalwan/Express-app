import express from "express";
import router from "./router.js";

//membuat server
const app = express();
app.use(express.json());

//menentukan port
const PORT = 5000;

app.use(router);

//mennjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
