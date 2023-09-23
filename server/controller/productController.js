const express = require("express");

// const { Router } = require("express");

const productModel = require("../model/product.model");

const productController = express.Router();

productController.get("/", async (req, res) => {
  const data = await productModel.find();

  if (data.length === 0) {
    return res.send({ message: "There is no Data!", result: 0 });
  }
  return res.send(data);
});

productController.get("/:productId", async (req, res) => {
  const { productId } = req.params;

  const data = await productModel.findOne({ _id: productId });

  if (!data === 0) {
    return res.send({ message: "There is no Data!", result: 0 });
  }
  return res.send(data);
});

productController.post("/create", async (req, res) => {
  const {
    productName,
    category,
    description,
    price,
    image,
    saller,
    stockQuantity,
    brand,
    manufacturer,
    features,
  } = req.body;
  const product = new productModel({
    productName,
    category,
    description,
    price,
    image,
    saller,
    
    stockQuantity,
    brand,
    manufacturer,
    
    features,
  });
  await product.save();
  return res.send(product);
});

productController.patch("/:productId/edit", async (req, res) => {
  const {productId} = req.params;
  console.log("edit", productId)

  try {
    const product = await productModel.findOne({ _id: productId });
    if (product) {
      await productModel.updateOne({ _id: productId }, { ...req.body });
      return res.send({ message: "Product updated succsessfully!", result: 1 });
    } else {
      return res.send({ message: "Product not found!", result: 0 });
    }
  } catch (err) {
    return res.send("Something went wrong!");
  }
});

productController.delete("/:productId/delete", async (req, res) => {
    const {productId} = req.params;
    try {
        const product = await productModel.findOne({ _id: productId });
        if (product) {
          await productModel.deleteOne({ _id: productId });
          return res.send({ message: "Product Deleted Succsessfully!", result: 1 });
        } else {
          return res.send({ message: "Product not found!", result: 0 });
        }
      } catch (err) {
        return res.send("Something went wrong!");
      }
})

module.exports = productController;
