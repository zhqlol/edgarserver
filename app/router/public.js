'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const prefix = '/public';

  router.get(`${prefix}/captcha`, controller.public.captcha.get); // 获取验证码
  router.post(`${prefix}/captcha`, controller.public.captcha.check); // 校验验证码
};