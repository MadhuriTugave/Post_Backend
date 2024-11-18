const mongoose = require("mongoose");

require("dotenv").config();

const MONGODBURL = process.env.MONGODBURL;

module.exports= ConnectedMongodb=async()=>{
    await mongoose.connect(MONGODBURL, { authSource: "admin" },{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("connected to mongodb");
    }).catch((e)=>{
      console.log(e);
      
    })
}