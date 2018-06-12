'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const prefix = '/mobile';

  router.get(`${prefix}/index`, controller.home.home.index);
  router.get(`${prefix}/client`, controller.home.home.client);
};