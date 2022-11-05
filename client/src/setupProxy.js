const { createProxyMiddleware } = require('http-proxy-middleware'); // eslint-disable-line no-unused-vars

module.exports = app => {
  app.use(
    createProxyMiddleware(['/member', '/content', '/signup', '/user'], {
      target: process.env.REACT＿APP＿TARGET_URL,
      changeOrigin: true,
      router: {
        '/content': process.env.REACT_APP_API_URL,
        '/user': process.env.REACT＿APP＿TARGET_URL,
        '/signup': process.env.REACT＿APP＿TARGET_URL,
      },
    }),
  );
};
