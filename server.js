var express = require('express');
var app = express();
const favicon = require('express-favicon');

app.use(favicon(__dirname + '/build/favicon.ico'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
app.use(express.static(__dirname + '/'));
// // app.listen(process.env.axdvcPORT || 8080);