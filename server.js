var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
app.use(express.static(__dirname + '/build/index.html'));
// app.listen(process.env.axdvcPORT || 8080);