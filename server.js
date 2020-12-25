const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));
app.listen(port, () => console.log(`Server listening on port ${port}`));

// var express = require('express');
// var app = express();
// const favicon = require('express-favicon');
//
// app.use(favicon(__dirname + '/build/favicon.ico'));
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
// });
// app.use(express.static(__dirname + '/'));
