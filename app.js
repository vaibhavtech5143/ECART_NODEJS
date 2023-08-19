const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")

const adminRoutes = require("./routes/admin.js")
const shopRoutes = require("./routes/shop.js")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{

    // res.status(404).send("<h1>404 Page Not Found</h1>");
    res.sendFile(path.join(__dirname,'views','404.html'))

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


