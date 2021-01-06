const { createProxyMiddleware } = require('http-proxy-middleware');
const target = 'https://back-for-app.herokuapp.com';

module.exports = app => {
    app.use(createProxyMiddleware('/api/**', { target }));
};
