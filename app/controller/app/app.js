const Controller = require('egg').Controller;

class AppController extends Controller {
  async index() {
    await this.ctx.renderClient('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }
}

module.exports = AppController;