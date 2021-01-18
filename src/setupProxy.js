const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://back-for-app.herokuapp.com',
            changeOrigin: true,
        })
    );
};