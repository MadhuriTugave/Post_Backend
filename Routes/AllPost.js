const express = require("express");

const upload = require("../Middlewares/Multer");
const { GetAllPosts ,  PostThePost, GetById, DeletePost, UpdatePost} = require("../Controllers/Post");
// console.log(upload);
const routes = express.Router();

routes.post("/posts",upload.single("image"),PostThePost);

routes.get("/", GetAllPosts)

routes.get("/post/:id" , GetById);

routes.delete("/post/:id" , DeletePost);

routes.put("/post/:id",upload.single("image") , UpdatePost);

module.exports= routes;