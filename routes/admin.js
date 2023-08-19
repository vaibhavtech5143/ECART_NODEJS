const express = require("express");
const router = express.Router();
const path =  require("path");
const rootDir = require("../util/path")

router.get('/add-product', (req, res, next) => {
    // res.send(`<form action="/admin/product" method="POST">
    //            <input type="text" name="title">
    //            <button id="breakfast2">Breakfast</button>
    //            </form>`);

// first method 
// res.sendFile(path.join(__dirname , '../' , 'views' , 'add-product.html'));
res.sendFile(path.join(rootDir , 'views' , 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body.title); // Log the request body
    res.redirect("/");
});


module.exports = router;