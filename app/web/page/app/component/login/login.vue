<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card class="login-con-card" hoverable>
        <div class="form-con">
          <div class="login-switch" @click="onTabChange">
            <Icon class="login-switch-icon" v-if="loginMethodKey === 1" type="monitor" />
            <Icon class="login-switch-icon" v-else type="ipad" />
            <div class="login-switch-cover"></div>
          </div>
          <div class="login-tip">
            <edgar-popover backgroundcolor="#E6F9FC" border="#14C2DD" color="#14C2DD">
              <span slot="content">{{loginMethod[(loginMethodKey+1)%2]}}</span>
            </edgar-popover>
          </div>
          <Form ref="loginForm" :model="form">
            <FormItem>
              <span class="login-con-title">{{loginMethod[loginMethodKey]}}</span>
            </FormItem>
            <template v-if="loginMethodKey === 0">
              <FormItem prop="username">
                <Input v-model="form.username" clearable placeholder='请输入用户名'>
                  <Icon slot="prepend" size="18" type="person"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="form.password" clearable placeholder="请输入密码">
                  <Icon slot="prepend" size="18" type="locked"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="captcha" style="margin-bottom: 12px;">
                <Row type="flex" justify="space-between">
                  <Col :span="17">
                    <Input v-model="form.captcha" clearable placeholder="请输入验证码">
                      <EIcon slot="prepend" size="14" type="safety"></EIcon>
                    </Input>
                  </Col>
                  <Col>
                    <div v-html="captchaSvg" @click="getCaptcha"></div>
                  </Col>
                </Row>
              </FormItem>
            </template>
            <template v-else>
              <FormItem prop="phone">
                <Input v-model="form.phone" clearable placeholder='请输入手机号'>
                  <Icon slot="prepend" size="22" type="ipad"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <aliyun-capcha appkey='FFFF0N000000000061C8' scene='nc_message' width="100%" v-on:callback='onCaptcha'></aliyun-capcha>
              </FormItem>
              <FormItem prop="mCaptcha">
                <Row type="flex" justify="space-between">
                  <Col :span="17">
                    <Input v-model="form.mCaptcha" clearable placeholder="请输入验证码" :disabled="aliCaptcha.csessionid === ''">
                      <EIcon slot="prepend" size="14" type="safety"></EIcon>
                    </Input>
                  </Col>
                  <Col>
                    <Button type="primary" :disabled="aliCaptcha.csessionid === ''">发送验证码</Button>
                  </Col>
                </Row>
              </FormItem>
            </template>
            <FormItem style="margin-bottom: 5px;">
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
            <FormItem style="margin-bottom: 0px;">
              <Row type="flex" justify="end">
                <Col>
                  <Button v-if="loginMethodKey === 0" type="text" @click="onTabChange">忘记密码</Button>
                  <Button type="text" @click="register">注册账户</Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import AliyunCaptcha from '../../../../component/alicaptcha/AliyunCaptcha.vue';
import Cookies from 'js-cookie';
const uri = 'http://127.0.0.1:7001';
export default {
  data() {
    return {
      loginMethod: ['密码登录', '手机号登录'],
      loginMethodKey: 0,
      form: {
        username: '',
        password: '',
        captcha: '',
        phone: '',
        mCaptcha: '',
        type: ''
      },
      captchaSvg: '',
      aliCaptcha: {
        csessionid: '',
        sig: '',
        token: '',
        scene: '',
        nc: ''
      }
    };
  },
  components: {
    'aliyun-capcha': AliyunCaptcha
  },
  methods: {
    onCaptcha(data) {
      this.aliCaptcha.csessionid = data.csessionid;
      this.aliCaptcha.sig = data.sig;
      this.aliCaptcha.token = data.token;
      this.aliCaptcha.scene = data.scene;
      this.aliCaptcha.nc = data.nc;
    },
    onTabChange() {
      this.loginMethodKey = (this.loginMethodKey + 1) % 2;
      this.form.type = this.loginMethodKey;
    },
    getCaptcha() {
      this.$axios.get(`${uri}/public/captcha`).then(response => {
        this.captchaSvg = response.data;
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      Cookies.set('edgar-user', 'superadmin');
      Cookies.set('edgar-password', '123456');
      this.$store.commit('setToken', '123456');
      this.$store.commit('setAvator', 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png');
      this.$router.push({
        name: 'home_index'
      });
    },
    register() {
      this.$router.push({ name: 'register' });
    }
  },
  mounted() {
    this.getCaptcha();
  }
};
</script>
