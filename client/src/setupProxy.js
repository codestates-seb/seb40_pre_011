const { createProxyMiddleware } = require('http-proxy-middleware');
// eslint-disable-line no-unused-vars
const TARGET_URL =
  'http://ec2-3-38-107-169.ap-northeast-2.compute.amazonaws.com:8080/';
const API_URL =
  'http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/';
module.exports = app => {
  app.use(
    createProxyMiddleware(['/member', '/content', '/signup', '/user'], {
      target: TARGET_URL,
      changeOrigin: true,
      router: {
        '/content': API_URL,
        '/user': TARGET_URL,
        '/signup': TARGET_URL,
      },
    }),
  );
};
