const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (App) => {
    App.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:4040',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
}