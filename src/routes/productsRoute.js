import express from "express";
import {
  addProductHandler,
  deleteProductByIdHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
} from "../handler/productsHandler.js";

//Variable router
const productsRouter = express.Router();

//routing
productsRouter.get("/products", getAllProductsHandler);
productsRouter.post("/products", addProductHandler);
productsRouter.get("/products/:productid", getProductByIdHandler);
productsRouter.put("/products/:productid", updateProductByIdHandler);
productsRouter.delete("/products/:productid", deleteProductByIdHandler);

export default productsRouter;
