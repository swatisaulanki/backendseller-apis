const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  saller: {
    type: String,
    required: true,
  },
  
  stockQuantity: {
    type:Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
 
  
  features: {
    type: [String],
    required: false,
  },
});

const productModel = new mongoose.model("sallerProduct", productSchema);

module.exports = productModel;
