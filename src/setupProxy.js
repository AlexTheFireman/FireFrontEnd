const { createProxyMiddleware } = require('http-proxy-middleware');
//const target = 'https://back-for-app.herokuapp.com';

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:9090',
            changeOrigin: true,
        })
    );
};
//
// module.exports = app => {
//     app.use(createProxyMiddleware('/api/**', { target }));
// };
