const Service = require('egg').Service;

/**
 * 验证码Service
 */
class CaptchaService extends Service {

    /**
     * CHECK
     * @returns {Boolean}
     */
    async check (captcha) {
        return captcha ? this.ctx.session.user.captcha === captcha.toLowerCase() : false;
    }

}

module.exports = CaptchaService;