import { products } from "../data/products.js";

//handler buat semua product
export const getAllProductsHandler = (req, res) => {
  res.json({
    status: "success",
    data: products,
  });
};

//menambahkan produk baru
export const addProductHandler = (req, res) => {
  const { name, deskription, price } = req.body;

  //validasi
  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan produk. Mohon isi nama produk",
    });
  }

  const id = Date.now();
  //wadah
  const newProduct = { id, name, deskription, price };

  products.push(newProduct);

  res.status(201).json({
    status: "success",
    message: "Data berhasil ditambahkan",
    data: {
      productId: id,
    },
  });
};

//mendapatkan produk berdasarkan ID
export const getProductByIdHandler = (req, res) => {
  const { productid } = req.params;
  const numeric = Number(productid);

  const product = products.find((p) => p.id === numeric);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Produk tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: { product },
  });
};

//mengubah data produk berdasarkan ID
export const updateProductByIdHandler = (req, res) => {
  const { productid } = req.params;
  const numeric = Number(productid);
  const { name, deskription, price } = req.body;
  const product = products.find((p) => p.id === numeric);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Produk tidak ditemukan",
    });
  }

  product.name = name;
  product.deskription = deskription;
  product.price = price;

  res.status(200).json({
    status: "success",
    message: "Data produk berhasil diubah",
    data: { product },
  });
};

//menghapus produk berdasarkan ID
export const deleteProductByIdHandler = (req, res) => {
  const { productid } = req.params;
  const numeric = Number(productid);
  const productIndex = products.findIndex((p) => p.id === numeric);

  const product = products.find((p) => p.id === numeric);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Maaf, Produk tidak ditemukan",
    });
  }

  const index = products.findIndex((p) => p.id === numeric);
  products.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: "Data produk berhasil dihapus",
  });
};
