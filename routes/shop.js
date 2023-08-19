const express = require("express");
const path =  require("path");
const rootDir = require("../util/path")

const router = express.Router();




router.get('/', (req, res,next) => {
    console.log("Get Request");
    // res.send("Hello, this is the homepage.");
    // res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));
    res.sendFile(path.join(rootDir , 'views', 'shop.html'));
});

module.exports =  router;