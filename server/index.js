const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./config/db");

const productController = require("./controller/productController");
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Homepage");
});
app.use("/product", productController);



app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log(`Database running on the port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
