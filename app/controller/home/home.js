const Model = require('../../mocks/article/list');

module.exports = app => {

  return class HomeController extends app.Controller {

    async index() {
      console.log('home index');
      const { ctx } = this;
      await ctx.render('index/index.js', Model.getPage(1, 10));
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('index/index.js', Model.getPage(1, 10));
    }

  };
};