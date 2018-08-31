const svgCaptcha = require('svg-captcha');
const Controller = require('../../core/base_controller');

/**
 * 验证码相关Controller
 */
class CaptchaController extends Controller {

    /**
     * 获取验证码
     * @throws {450} 参数缺失
     * @throws {10001} 刚发过
     */
    async get () {
        const ctx = this.ctx;
        // 生成验证码
        const captcha = svgCaptcha.create({
          width: 96,
          height: 32,
          fontSize: 40,
          color: true
        });
        ctx.session.user = {
          captcha: captcha.text.toLowerCase()
        };
        ctx.body = captcha.data;
        ctx.status = 200;
    }

    /**
     * 校验短信验证码
     * @throws {450} 参数缺失
     * @throws {404} 未检索到该手机号验证码
     * @throws {10002} 验证码错误
     * @throws {10003} 验证码超时
     */
    async check () {
        const ctx = this.ctx;
        const rule = {
          captcha: { type: 'string' }
        };
        // 校验参数
        try {
          ctx.validate(rule);
        } catch (err) {
          this.failure('参数缺失', 450);
          return;
        }
        try {
          this.success(await ctx.service.public.captcha.check(ctx.request.body.captcha));
        } catch (err) {
          this.failure('校验异常', err.message);
        }
    }

}

module.exports = CaptchaController;