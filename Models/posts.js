const mongoose = require("mongoose");

const PostSchems = new mongoose.Schema({
     
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
},{ timestamps: true });

const PostModule = mongoose.model('Post', PostSchems);
module.exports= PostModule;