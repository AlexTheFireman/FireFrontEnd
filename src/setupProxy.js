const { createProxyMiddleware } = require('http-proxy-middleware');
//const target = 'https://back-for-app.herokuapp';

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://back-for-app.herokuapp.com',
            changeOrigin: true,
        })
    );
};
//
// module.exports = app => {
//     app.use(createProxyMiddleware('/api/**', { target }));
// };
