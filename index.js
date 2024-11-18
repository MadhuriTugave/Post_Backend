const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const connectionDB = require("./DB/index");
const routes = require("./Routes/AllPost");
dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

// Middleware for parsing JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Static folder to serve images
app.use("/uploads", express.static("uploads"));

connectionDB();

// route for Post Get, Post, Update, delete
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
