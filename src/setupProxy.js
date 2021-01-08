const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/imjad', createProxyMiddleware({
        target: 'https://api.imjad.cn',
        pathRewrite: {
            '^/imjad': '',
        },
        changeOrigin: true,
    }));
};