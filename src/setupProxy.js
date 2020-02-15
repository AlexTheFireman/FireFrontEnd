const proxy = require('http-proxy-middleware');

const target = 'http://localhost:9090';

module.exports = app => {
    app.use(proxy('/api/fires', { target }));
}