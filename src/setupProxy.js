const {
    createProxyMiddleware
} = require('http-proxy-middleware'); //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'https://api.imjad.cn',
        pathRewrite: {
            '^/api': '',
        },
        changeOrigin: true,
        secure: false, // 是否验证证书
        ws: true, // 启用websocket
    }));
};