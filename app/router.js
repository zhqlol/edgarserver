module.exports = app => {
  const { router, controller } = app;

  router.get('/app(/.+)?', controller.app.app.index);
  router.redirect('/', '/app');
};
