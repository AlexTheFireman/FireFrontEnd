var express = require('express');
var app = express();
const favicon = require('express-favicon');
// const helmet = require('helmet')
// app.use(
//     // [
//     helmet.contentSecurityPolicy({
//         directives: {
//             defaultSrc: ["'self'"],
//             connectSrc: ["'self'", 'https://checkout.stripe.com'],
//             frameSrc: ["'self'", 'https://checkout.stripe.com'],
//             childSrc: ["'self'", 'https://checkout.stripe.com'],
//             scriptSrc: ["'self'", 'https://checkout.stripe.com'],
//             styleSrc: [
//                 "'self'",
//                 'https://fonts.googleapis.com',
//                 'https://checkout.stripe.com',
//             ],
//             fontSrc: ["'self'", 'https://fonts.gstatic.com'],
//             imgSrc: ["'self'", 'https://*.stripe.com', 'https://res.cloudinary.com'],
//             baseUri: ["'self'"],
//         },
//     })
//     // ]
// );
app.use(favicon(__dirname + '/build/favicon.ico'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
app.use(express.static(__dirname + '/'));
// // app.listen(process.env.axdvcPORT || 8080);