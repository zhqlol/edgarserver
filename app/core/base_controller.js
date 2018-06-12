const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data, message, code) {
    this.ctx.body = {
      success: true,
      data: data == null || data === undefined ? {} : data,
      version: null,
      status: 'ok',
      code: code || 200,
      message: message || 'success'
    };
  }

  failure(message, code, data) {
    this.ctx.body = {
      success: true,
      data: data || {},
      version: null,
      status: 'ok',
      code: code || 500,
      message: message || 'error'
    };
  }

}
module.exports = BaseController;