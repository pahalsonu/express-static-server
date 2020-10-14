const express = require("express");
const app = express()
const path = require("path");
const serveindex = require('serve-index');

const port = process.env.PORT || 3000;
//serving static files

app.use('/', express.static("views"))

app.use('/home', express.static("views"));

app.use('/books',express.static('Books'), serveindex('Books', {"icon":true}));

app.use('/download', (req, res) =>{
    const filepath = path.join(__dirname, "dummy.pdf")
})

app.listen(port, ()=>{ 
    console.log(`Server is runnig at ${port}`)
})