const { createProxyMiddleware } = require('http-proxy-middleware');

const target = 'https://acc-frontend.herokuapp.com/';

//const target = 'http://localhost:9090';

module.exports = app => {
    app.use(createProxyMiddleware('/api/**', { target }));
};
