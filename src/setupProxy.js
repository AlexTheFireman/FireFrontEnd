const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.NODE_ENV === 'development' ? 'http://localhost:9090' : 'https://back-for-app.herokuapp.com/',
            changeOrigin: true
        })
    );
};