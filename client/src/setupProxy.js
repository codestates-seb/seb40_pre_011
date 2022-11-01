const { createProxyMiddleware } = require('http-proxy-middleware'); // eslint-disable-line no-unused-vars

const TARGET_URL =
  'http://ec2-3-38-107-169.ap-northeast-2.compute.amazonaws.com:8080/';

module.exports = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: TARGET_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
